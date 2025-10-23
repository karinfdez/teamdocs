import UploadArea from "../features/files/components/UploadArea";


export default function Home() {
    return (
        <div className="max-w-2xl max-auto p-10">
            <h1 className="text-2xl font-bold mb-6">Upload Files</h1>
            <UploadArea />
        </div>
    )
}