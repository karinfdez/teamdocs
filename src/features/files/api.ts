// Mocked API

interface FileItem {
    id: string;
    name: string;
}

const mockFiles: FileItem[] = []  //Simulates saved in DB

export async function getFiles() {
    await new Promise(res => setTimeout(res, 200)) // to simulate network delay
    return mockFiles
}

export async function uploadFile(file: File): Promise<FileItem> {
    await new Promise(res => setTimeout(res, 300)) // To simulate uploading time

    const newFile = {
        id: crypto.randomUUID(),
        name: file.name,
    };
    mockFiles.push(newFile)
    return newFile
}