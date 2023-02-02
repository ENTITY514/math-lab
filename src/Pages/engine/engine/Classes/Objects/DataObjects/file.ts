import { nanoid } from "nanoid"
import { FileType } from "../../../Types/file_types"
import { Directory } from "./directory"

export class File {
    id: string
    name: string
    type: FileType
    url: string
    metadata: any
    data: any
    parent: Directory

    constructor(name: string, type: FileType, data: any, parent: Directory, metadata: any = null) {
        this.name = name
        this.type = type
        this.data = data
        this.parent = parent
        this.id = nanoid()
        this.url = this.parent !== null ? this.parent.url + '/' + this.name + '.' + this.type : ''
        this.metadata = metadata
    }

    _set_id(id: string) {
        this.id = id
    }

    getData() {
        return this.data
    }

    getMetadata() {
        return this.metadata
    }

    rename(name: string) {
        if (name !== '') {
            this.name = name
        }
    }
}