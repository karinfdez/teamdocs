import {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

type PreviewFile = {
    name: string;
    preview: string;
    type: string
}

function UploadArea() {
    const [files, setFiles] = useState<PreviewFile[]>([])
  
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const mapped = acceptedFiles.map((file) => ({
            name: file.name,
            type: file.type,
            preview: URL.createObjectURL(file), 
        }))
        setFiles((prev) => [...prev, ...mapped])
    }, [])
  
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: {
            "image/*": [], // images
            "application/pdf": [] // PDFs
        },
         multiple: true, // allow multiple uploads
    })

    return (
        <div className="space-y-4">
            <div
                {...getRootProps()}
                className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-8 cursor-pointer transition
                    ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50"}
                `}
                >
                <input {...getInputProps()} />
                <p className="text-gray-600 text-center">
                    {isDragActive
                    ? "Drop your files here..."
                    : "Drag & drop some files here, or click to select files"}
                </p>
            </div>

            {/* {files.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                    {files.map((file) => (
                        <div
                        key={file.name}
                        className="border rounded-lg overflow-hidden bg-white shadow-sm"
                        >
                        {file.type.startsWith("image/") ? (
                            <img
                            src={file.preview}
                            alt={file.name}
                            className="h-40 w-full object-cover"
                            />
                        ) : (
                            <div className="h-40 flex items-center justify-center bg-gray-100 text-gray-500">
                                PDF
                            </div>
                        )}
                        <div className="p-2 text-sm truncate">{file.name}</div>
                        </div>
                    ))}
                </div>
            )} */}
        </div>
    );
}

export default UploadArea