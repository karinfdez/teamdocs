import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function UploadArea() {
  
    const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log('dropped files', acceptedFiles)
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
    );
}

export default UploadArea