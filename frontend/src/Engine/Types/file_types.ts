export enum FileType {
    TXT = "txt",
    TEXTURE = "txtr",
    SCRIPT = "mljs",
    DEV_SCRIPT = "dmjs"
}

export interface FileData {
    id: string
    name: string
    type: string
    url: string
    metadata: string
    data: string
    is_file: true
}

export interface DirectoryData {
    name: string
    id: string
    childs: Array<FileData | DirectoryData>,
    is_file: false
}