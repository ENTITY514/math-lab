import { Engine } from "../../../main";
import { ScriptFile } from "../../Objects/DataObjects/script_file";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
// @ts-ignore
import { atomone } from '@uiw/codemirror-theme-atomone';
import { Module } from "../module";
import { DefaultSS } from "./default_script_text";

export class ScriptModule extends Module {
    active_file: ScriptFile | null = null
    files: Array<ScriptFile> = []
    script_editor!: JSX.Element;
    constructor(engine: Engine) {
        super(engine)
    }

    update_active_file(value: string, viewUpdate: any) {
        this.active_file?.updateScript(value)
    }

    set_active_file(file: ScriptFile) {
        this.active_file = file
        this.script_editor = <CodeMirror
            value={this.active_file.data}
            height="500px"
            theme={atomone}
            extensions={[javascript()]}
            onChange={(value, viewUpdate) => { this.update_active_file(value, viewUpdate) }}
        />
    }

    get_editor() {
        return this.script_editor
    }

    create_file() {
        const file = new ScriptFile("script_file", DefaultSS.script, this.engine.file_system.root)
        this.engine.file_system.root.addFile(file)
        this.files.push(file)
        this.set_active_file(file)
    }
}