import { FileType } from "../../../Types/file_types";
import { Directory } from "./directory";
import { File } from "./file";
import * as PIXI from 'pixi.js'
import { FileView } from "./views/view";
import { Assets } from "../../../../assets/get";

export class TextureFile extends File {
    data: string = ""
    texture: PIXI.Texture = PIXI.Texture.WHITE
    constructor(
        name: string = "texture_file",
        data: string,
        parent: Directory,
    ) {
        super(name, FileType.TEXTURE, data, parent)
        console.log(data);
        
        this.data = data
        if (this.data !== "") {
            this.texture = PIXI.Texture.from(this.data)
        }
    }

    __file_view__(size: string) {
        return <FileView title={ this.name } url = { this.data } size = { size } key = { this.id } />
    }
}