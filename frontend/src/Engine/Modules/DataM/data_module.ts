import { Engine } from "../../core";
import { Module } from "../module";
import { SpriteData } from "../../Types/objects_interfaces";

export class DataModule extends Module {
    is_dev_mode: boolean = true
    constructor(engine: Engine) {
        super(engine)
    }

    create_data_set(): string {
        return JSON.stringify(this.engine.object_module.objects.map(object => {
            return object.__get_data__()
        }))
    }

    create_game_from_data_set() {

    }

    compileAppToHTML() {
        return new Blob(["Hello, world!"], { type: 'text/html' });
    }

    openProject(data: string) {
        this.engine.object_module.clear()
        let parsed_data = JSON.parse(data) as Array<SpriteData>
        parsed_data.forEach(object => {
            if (object.type === "sprite") {
                const obj = this.engine.object_module.createObject()
                obj.__create_from_data(object)
            }
        });
    }
}