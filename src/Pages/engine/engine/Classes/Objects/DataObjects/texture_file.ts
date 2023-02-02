import { FileType } from "../../../Types/file_types";
import { Directory } from "./directory";
import { File } from "./file";

export class TextureFile extends File {
    data: string
    constructor(
        name: string = "texture_file",
        data: string,
        parent: Directory,
    ) {
        super(name, FileType.TEXTURE, data, parent, metadata)
    }
}