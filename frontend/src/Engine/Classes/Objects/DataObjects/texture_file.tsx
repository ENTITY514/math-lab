import { FileData, FileType } from "../../../Types/file_types";
import { Directory } from "./directory";
import { File } from "./file";
import * as PIXI from 'pixi.js'
import { FileView } from "./views/view";

export class TextureFile extends File {
    data: string = ""
    texture: PIXI.Texture = PIXI.Texture.WHITE
    constructor(
        name: string = "texture_file",
        data: string,
        parent: Directory,
    ) {
        super(name, FileType.TEXTURE, data, parent)
        this.data = data
        if (this.data !== "") {
            this.texture = PIXI.Texture.from(this.data)
        }
    }

    __file_view__(size: string) {
        return <FileView title={this.name} url={this.data} size={size} key={this.id} id={this.id} />
    }

    __create_from_data(data: FileData) {
        this.name = data.name
        this.id = data.id
        this.type = data.type as FileType
        this.data = data.data
        this.metadata = data.metadata
        if (this.data !== "") {
            this.texture = PIXI.Texture.from(this.data)
        }
        else {
            this.texture = PIXI.Texture.WHITE
        }
    }
}