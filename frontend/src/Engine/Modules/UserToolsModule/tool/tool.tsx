import { nanoid } from "nanoid";
import { ScriptFileDev } from "../../../Classes/Objects/DataObjects/script_dev";
import { ToolView } from "./tool_view";
import { DefaultSS } from "../../ScriptM/default_script_text";
import { Engine } from "../../../core";
import { ToolScriptObject } from "./script_class";
import { InputModule } from "../../InputModule/input_module";

export class Tool {
    name: string
    id: string
    script!: ScriptFileDev
    script_class: ToolScriptObject | null = null
    engine: Engine
    is_active: boolean = false
    input_system: InputModule
    constructor(engine: Engine) {
        this.name = "tool"
        this.id = nanoid()
        this.engine = engine
        this.input_system = new InputModule()
        this.__create_script__()
        this.__execute__()
    }

    private __create_script__() {
        this.script = new ScriptFileDev("dev_script_file", DefaultSS.user_script, new Engine().file_system.root)
        this.engine.file_system.root.addFile(this.script)
        this.engine.script_module.files.push(this.script)
    }

    private __execute__() {
        if (this.script) {
            try {
                this.script_class = new (this.script.execute())(this.input_system)
                if (this.script_class && this.script_class.name) {
                    this.name = this.script_class.name
                }
            }
            catch (error) {
                console.log(error)
            }
        }
    }

    set_name(value: string) {
        this.name = value
    }

    reload() {
        if (this.is_active) this.turnOff()
        this.input_system.clear()
        this.__execute__()
        this.turnOn()
    }

    turnOn() {
        this.is_active = true
        this.script_class?.onTurnOn()
        if (this.script_class) {
            this.engine.updaters_functions.push({
                name: this.name,
                id: this.id,
                func: this.script_class.onUpdate.bind(this.script_class)
            })
        }
    }

    turnOff() {
        this.is_active = false
        this.script_class?.onTurnOff()
        if (this.script_class) {
            let index = null
            this.engine.updaters_functions.forEach((updater, i) => {
                if (updater.id === this.id) {
                    index = i
                }
            });
            if (index) {
                this.engine.updaters_functions.splice(index, 1)
            }
        }
    }

    __react__view__() {
        return <ToolView tool={this} />
    }

    export() {
        return JSON.stringify({
            name: this.name,
            script: this.script.__get_data__(),
            id: this.id
        })
    }
}