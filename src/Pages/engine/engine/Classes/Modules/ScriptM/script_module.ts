import { Engine } from "../../../main";
import { ScriptFile } from "../../Objects/DataObjects/script_file";
import { Module } from "../module";
import { DefaultSS } from "./default_script_text";

export class ScriptModule extends Module {
    active_file: ScriptFile | null = null
    files: Array<ScriptFile> = []
    constructor(engine: Engine) {
        super(engine)

    }

    update_active_file(data: string) {
        this.active_file?.updateScript(data)
    }

    create_file() {
        const file = new ScriptFile("script_file", DefaultSS.script, this.engine.file_system.root)
        this.engine.file_system.root.addFile(file)
        this.files.push(file)
        this.active_file = file
    }
}