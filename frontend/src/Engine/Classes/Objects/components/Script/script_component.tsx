import { Component } from "../component";
import { Sprite } from "../../ViewObjects/sprite";
import { ScriptView } from "./script_view";
import { ScriptFile } from "../../DataObjects/script_file";
import { Engine } from "../../../../core";
import { ScriptComponentData } from "../../../../Types/objects_interfaces";
import { Primitive } from "../../ViewObjects/primitive";

export class ScriptComponent extends Component {
    object!: Primitive
    scripts: Array<ScriptFile> = []
    constructor(object: Primitive) {
        super(object, "script")
        this.object = object
        this.object.components.push(this)
    }

    get(script_name: string): ScriptFile | null {
        let script: ScriptFile | null = null
        this.scripts.forEach(script_ => {
            if (script_.name === script_name) {
                script = script_
            }
        });
        return script
    }

    addScript(script: ScriptFile) {
        const is_find = this.scripts.find(script_ => script_ === script)
        if (!is_find) { this.scripts.push(script) }
    }

    __react_view__() {
        return <ScriptView component={this} key={this.id} />
    }

    __get_data__() {
        const scripts = this.scripts.map(script => {
            return script.id
        })
        return {
            type: this.type,
            id: this.id,
            scripts
        } as ScriptComponentData
    }


    __create_from_data(data: ScriptComponentData): void {
        let engine = new Engine()
        this.type = data.type
        this.id = data.id
        this.scripts = []
        data.scripts.forEach(script_id => {
            let file = engine.file_system.root.findFileByID(script_id) as ScriptFile | null
            if (file !== null) {
                this.addScript(file)
            }
        });

    }
}