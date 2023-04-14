import { nanoid } from "nanoid"
import { Assets } from "../../../../assets/get"
import { FileData, FileType } from "../../../Types/file_types"
import { Directory } from "./directory"
import { FileView } from "./views/view"

export class File {
    id: string
    name: string
    type: FileType
    url: string
    metadata: any
    data: any
    parent: Directory
    icon_url!: string
    constructor(name: string, type: FileType, data: any, parent: Directory, metadata: any = null, file_icon: string = Assets.file_icon) {
        this.name = name
        this.type = type
        this.data = data
        this.parent = parent
        this.id = nanoid()
        this.url = this.parent !== null ? this.parent.url + '/' + this.name + '.' + this.type : ''
        this.metadata = metadata
        this.icon_url = file_icon
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

    __file_view__(size: string) {
        return <FileView title={this.name} url={this.icon_url} size={size} key={this.id} id={this.id} />
    }

    __get_data__(): FileData {
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            url: this.url,
            metadata: this.metadata,
            data: this.data,
            is_file: true
        } as FileData
    }

    __create_from_data(data: FileData) {
        this.name = data.name
        this.id = data.id
        this.type = data.type as FileType
        this.data = data.data
        this.metadata = data.metadata
    }
}