import { Engine } from "../../core";
import { Module } from "../module";
import { SpriteData } from "../../Types/objects_interfaces";

export class DataModule extends Module {
    is_dev_mode: boolean = true
    project_data!: {
        name: string
        id: string
        device: string
        type: string
        screen_settings: {
            width: string | number
            height: string | number
        }
    }
    constructor(engine: Engine) {
        super(engine)
    }

    create_data_set(): string {
        console.log("data");

        let data_set = {
            objects: this.engine.object_module.objects.map(object => {
                return object.__get_data__()
            }),
            file_system: this.engine.file_system.__get_data__()
        }
        return JSON.stringify(data_set)
    }

    create_from_data_set() {

    }

    compileAppToHTML() {
        return new Blob(["Hello, world!"], { type: 'text/html' });
    }

    openProject(data: string) {
        this.engine.object_module.clear()
        let parsed_data = JSON.parse(data) as Array<SpriteData>
        parsed_data.forEach(object => {
            const obj = this.engine.object_module.createObject(object.type)
            obj.__create_from_data(object)
        });
    }
}