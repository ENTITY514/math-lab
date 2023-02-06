import { FileType } from "../../../Types/file_types";
import { Directory } from "./directory";
import { File } from "./file";
import * as PIXI from 'pixi.js'

export class TextureFile extends File {
    data: string = ""
    texture: PIXI.Texture = PIXI.Texture.WHITE
    constructor(
        name: string = "texture_file",
        data: string = "",
        parent: Directory,
    ) {
        super(name, FileType.TEXTURE, data, parent)
        if (this.data !== "") {
            this.texture = PIXI.Texture.from(this.data)
        }
    }
}