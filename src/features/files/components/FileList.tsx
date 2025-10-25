


export default function FileList() {

    // Mock files for now
    const files = [
        {id: 1, name: "project-design.pdf", type:"application/pdf"},
        {id: 2, name: "project-design.pdf", type:"application/pdf"}
    ]

    return (
        <div className="grid grid-cols-3 gap-4">
            {files.map((file) => (
              <div
								key={file.id}
								className="border rounded-lg overflow-hidden bg-white shadow-sm"
								>
									{file.type.startsWith("image/") ? (
											<img
											src="/placeholder.png"
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
    )
}