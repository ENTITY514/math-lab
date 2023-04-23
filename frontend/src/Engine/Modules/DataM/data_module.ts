import { Engine } from "../../core";
import { Module } from "../module";
import { PrimitiveData, SpriteData } from "../../Types/objects_interfaces";
import { DirectoryData } from "../../Types/file_types";
import { Directory } from "../../Classes/Objects/DataObjects/directory";

interface IDataSet {
    data_module: {
        name: string;
        id: string;
        device: string;
        type: string;
        screen_settings: {
            width: string | number;
            height: string | number;
        };
    };
    objects: PrimitiveData[];
    file_system: DirectoryData
}

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
        let data_set = {
            data_module: this.project_data,
            objects: this.engine.object_module.objects.map(object => {
                return object.__get_data__()
            }),
            file_system: this.engine.file_system.__get_data__()
        }
        return JSON.stringify(data_set)
    }

    create_from_data_set(data_set: string) {
        this.engine.object_module.clear()
        let parsed_data = JSON.parse(data_set) as IDataSet
        this.project_data = parsed_data.data_module
        this.engine.file_system.__create_from_data(parsed_data.file_system)
        parsed_data.objects.forEach(object => {
            const obj = this.engine.object_module.createObject(object.type)
            obj.__create_from_data(object)
        });
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

    clearProject() {
        this.engine.object_module.clear()
        this.engine.tool_module.update_tool_state(false)
        this.engine.script_module.set_active_file(null)
        this.engine.script_module.files = []
        this.engine.file_system.root = new Directory("root", null)
        this.engine.dev_camera.setPosition(0, 0)
    }
}