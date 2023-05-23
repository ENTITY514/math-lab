import { Directory } from "./directory";
import { ScriptFile } from "./script_file";
import { Assets } from "../../../../assets/get";

export class ScriptFileDev extends ScriptFile {
    data: string = ""
    is_save: boolean = true
    is_executed: boolean = false
    constructor(
        name: string = "script_file",
        data: string,
        parent: Directory,
    ) {
        super(name, data, parent)
        this.icon_url = Assets.script_file
        this.data = data
    }

    __get_script_class__() {
        const script_class = this.execute()
        return new script_class()
    }

    execute() {
        this.is_executed = true
        return (new Function(this.data))()
    }
}