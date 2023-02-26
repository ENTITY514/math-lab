import { FileType } from "../../../Types/file_types";
import { Directory } from "./directory";
import { File } from "./file";
import { Assets } from "../../../../assets/get";
import { Sprite } from "../ViewObjects/sprite";
import { ScriptObject } from "../../Modules/TestM/script_class";

export class ScriptFile extends File {
    data: string = ""
    is_save: boolean = true
    constructor(
        name: string = "script_file",
        data: string,
        parent: Directory,
    ) {
        super(name, FileType.TEXTURE, data, parent)
        this.icon_url = Assets.script_file
        this.data = data
    }

    execute() {
        let execute = (new Function(this.data))()
        return execute
    }

    __get_script_class__(object: Sprite) {
        const script_class = this.execute()
        return new script_class(object)
    }

    updateScript(data: string) {
        this.is_save = true
        this.data = data
    }
}