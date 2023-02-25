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
    last_editable_files: Array<ScriptFile> = []
    script_editor!: JSX.Element;
    constructor(engine: Engine) {
        super(engine)
    }

    update_active_file(value: string, viewUpdate: any) {
        this.active_file?.updateScript(value)
    }

    set_active_file(file: ScriptFile | null) {
        this.active_file = file
        if (this.active_file !== null) {
            this.add_editable_file(file as ScriptFile)
            this.script_editor = <CodeMirror
                value={this.active_file.data}
                theme={atomone}
                extensions={[javascript()]}
                onChange={(value, viewUpdate) => { this.update_active_file(value, viewUpdate) }}
            />
        }
    }

    add_editable_file(file: ScriptFile) {
        if (!this.last_editable_files.find(file_ => file_ === file)) {
            this.last_editable_files.push(file)
        }

    }

    remove_editable_file(file: ScriptFile) {
        let i = 0
        let is_active_file = this.active_file === file
        this.last_editable_files = this.last_editable_files.filter((file_: ScriptFile, index: number) => {
            if (file_ === file) {
                i = index
                return false
            }
            else {
                return true
            }
        })

        let length = this.last_editable_files.length
        if (is_active_file) {
            if (length > 0) {
                this.set_active_file(this.last_editable_files[0])
            }
            else if (length === 0) {
                this.set_active_file(null)
            }
        }
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