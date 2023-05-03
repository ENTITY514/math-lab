import { Engine } from "../../core";
import { Module } from "../module";
import { PrimitiveData, SpriteData } from "../../Types/objects_interfaces";
import { DirectoryData } from "../../Types/file_types";
import { Directory } from "../../Classes/Objects/DataObjects/directory";
import { nanoid } from "nanoid";
import { Vector2 } from "../../Types/math_types";

interface IDataSet {
    camera_obj: { position: Vector2 }
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
    project_data: {
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
        this.project_data = {
            name: "",
            id: nanoid(),
            device: "any",
            type: "any",
            screen_settings: {
                width: 1920,
                height: 1080
            }

        }
    }

    create_data_set(): string {
        let data_set = {
            data_module: this.project_data,
            camera_obj: this.engine.object_module.camera.__get_data__(),
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
        this.engine.object_module.camera.__create_from_data(parsed_data.camera_obj)
        this.engine.object_module.camera.display_object.position.x = parsed_data.camera_obj.position.x
        this.engine.object_module.camera.display_object.position.y = parsed_data.camera_obj.position.y
        this.engine.file_system.__create_from_data(parsed_data.file_system)
        parsed_data.objects.forEach(object => {
            const obj = this.engine.object_module.createObject(object.type)
            obj.__create_from_data(object)
        });
        this.engine.script_module.files = this.engine.file_system.root.getAllFilesByType("mljs")
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
        this.engine.object_module.camera.display_object.position.x = 0
        this.engine.object_module.camera.display_object.position.y = 0
        this.engine.tool_module.update_tool_state(false)
        this.engine.script_module.set_active_file(null)
        this.engine.script_module.files = []
        this.engine.file_system.root = new Directory("root", null)
        this.engine.file_system.active_dir = this.engine.file_system.root
        this.engine.dev_camera.setPosition(0, 0)
    }
}