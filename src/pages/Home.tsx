import UploadArea from "../features/files/components/UploadArea";
import FileList from "../features/files/components/FileList";

export default function Home() {
    return (
			<div className="max-w-2xl max-auto p-10">
					<h1 className="text-2xl font-bold mb-6">Upload Files</h1>
					<div className="p-10 space-y-10 max-w-4xl mx-auto">
						<UploadArea />
						<FileList />
					</div>
			</div>
    )
}