import { Component } from "../component";
import { Sprite } from "../../ViewObjects/spite";
import { ScriptView } from "./script_view";
import { ABD_script_component } from "../../../Modules/TestM/data_of_objects";
import { ScriptFile } from "../../DataObjects/script_file";

export class ScriptComponent extends Component {
    object!: Sprite
    scripts: Array<ScriptFile> = []
    constructor(object: Sprite) {
        super(object, "script")
        this.object = object
        this.object.components.push(this)
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
        } as ABD_script_component
    }


    __create_from_data(data: ABD_script_component): void {
        this.type = data.type
        this.id = data.id
    }
}