import { FileType } from "../../../Types/file_types";
import { Directory } from "./directory";
import { File } from "./file";
import { Assets } from "../../../../assets/get";
import { Engine } from "../../../core";

export class ScriptFileDev extends File {
    data: string = ""
    is_save: boolean = true
    constructor(
        name: string = "script_file",
        data: string,
        parent: Directory,
    ) {
        super(name, FileType.DEV_SCRIPT, data, parent)
        this.icon_url = Assets.script_file
        this.data = data
    }

    execute(core: Engine) {
        return (new Function(this.data))(core)
    }

    __get_script_class__(core: Engine) {
        const script_class = this.execute(core)
        return new script_class()
    }

    updateScript(data: string) {
        this.is_save = true
        this.data = data
    }
}