import { useFilesQuery } from "../hooks/useFilesQuery"

export default function FileList() {

	const {data, isLoading, isError, error} = useFilesQuery()

		if(isLoading) return <div>Loading....</div>

		if(isError) return <div className="text-red-500 font-bold">Error: {(error as Error).message}</div>

    return (
        <div className="grid grid-cols-3 gap-4">
            {data?.map((file) => (
              <div
								key={file.id}
								className="border rounded-lg overflow-hidden bg-white shadow-sm"
								>
									<div className="h-40 flex items-center justify-center bg-gray-100 text-gray-500">
										{file.name}
									</div>
                <div className="p-2 text-sm truncate">{file.name}</div>
              </div>
            ))}
        </div>
    )
}