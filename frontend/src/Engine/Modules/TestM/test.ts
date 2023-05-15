import * as PIXI from "pixi.js"
import { DataModule } from "../DataM/data_module";
import { ObjectsModule } from "../ObjectsM/objects_module";
import { ScriptModule } from "../ScriptM/script_module";
import { PrimitiveData, SpriteData } from "../../Types/objects_interfaces";
import { ScriptObject } from "./script_class";
import { EventModule } from "../EventModule/event_module";
import { ENGINE_FILE_SYSTEM_MODULE } from "../../Classes/Objects/DataObjects/file_system";
import { Engine } from "../../core";
import { ScriptComponent } from "../../Classes/Objects/components/Script/script_component";
import { DirectoryData } from "../../Types/file_types";
import { Sprite } from "../../Classes/Objects/ViewObjects/sprite";
import { InputModule } from "../InputModule/input_module";
import { Camera } from "../../Classes/Objects/ViewObjects/camera";
import { ObjectTypes } from "../../Types/object_types";
import { Vector2 } from "../../Types/math_types";
import { Primitive } from "../../Classes/Objects/ViewObjects/primitive";
import { DrawModule } from "../DrawModule/draw_module";

interface IDataSet {
    camera_obj: { position: Vector2 }
    draw_module: Array<Array<number>>
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

export class Test {
    engine: Engine
    app!: PIXI.Application
    canvasContainer: HTMLDivElement | undefined
    object_module!: ObjectsModule
    data_module!: DataModule
    file_system!: ENGINE_FILE_SYSTEM_MODULE
    script_module!: ScriptModule
    event_module: EventModule
    input_module!: InputModule
    prev: string = ""
    draw_module!: DrawModule
    constructor(engine: Engine) {
        this.data_module = new DataModule(this as unknown as Engine)
        this.data_module.is_dev_mode = false
        this.engine = engine
        this.initRenderer();
        this.render();
        this.file_system = new ENGINE_FILE_SYSTEM_MODULE()
        this.script_module = new ScriptModule(this as unknown as Engine)
        this.object_module = new ObjectsModule(this as unknown as Engine)
        this.event_module = new EventModule(this as unknown as Engine)
        this.input_module = new InputModule(this as unknown as Engine)
        //@ts-ignore
        globalThis.core = {
            file_system: this.file_system,
            object_module: this.object_module,
            input_module: this.input_module,
            event_module: this.event_module,
            time: {
                deltaTime: 0
            }
        }
        this.animate()
    }

    addView(canvasContainer: HTMLDivElement) {
        this.canvasContainer = canvasContainer
        this.canvasContainer.style.display = "grid"
        if (this.canvasContainer.children.length < 1) {
            this.canvasContainer.appendChild(this.app.view);
        }
        this.draw_module = new DrawModule(this as unknown as Engine)
    }

    initRenderer() {
        this.app = new PIXI.Application({
            width: Number(this.data_module.project_data.screen_settings.width),
            height: Number(this.data_module.project_data.screen_settings.height),
            backgroundColor: 0x000000
        });
    }

    build_app_from_data_set(data: string) {
        if (data !== this.prev) {
            this.prev = data
            this.object_module.clear()

            this.event_module.clearAllEvent()
            this.input_module.clear()
            this.event_module.addEvent("onStart")
            this.event_module.addEvent("onUpdate")

            let parsed_data = JSON.parse(data) as IDataSet

            if (this.canvasContainer) {
                let h = this.canvasContainer.clientHeight
                let aspect_ratio = Number(this.engine.data_module.project_data.screen_settings.width) / Number(this.engine.data_module.project_data.screen_settings.height)

                if (this.canvasContainer.clientWidth > h * aspect_ratio) {
                    this.app.view.height = h
                    this.app.view.width = h * aspect_ratio
                }
                else {
                    this.app.view.width = this.canvasContainer.clientWidth
                    this.app.view.height = this.canvasContainer.clientWidth / aspect_ratio
                }



                let x = this.app.view.width / Number(this.data_module.project_data.screen_settings.width)
                let y = this.app.view.height / Number(this.data_module.project_data.screen_settings.height)

                this.app.stage.scale.x = x
                this.app.stage.scale.y = y

                this.object_module.camera.k = (x + y) / 2
            }


            if (parsed_data.draw_module) {
                this.draw_module.__create_from_data(parsed_data.draw_module)
            }

            this.object_module.camera.__create_from_data(parsed_data.camera_obj)

            parsed_data.objects.forEach(object => {
                const obj = this.object_module.createObject(object.type)
                obj.__create_from_data(object)
            })

            this.file_system.__create_from_data(parsed_data.file_system)
            this.object_module.objects.forEach(object => {
                object.components.forEach(component => {
                    if (object instanceof Sprite) {
                        if (component instanceof ScriptComponent) {
                            component.scripts.forEach(script => {
                                let script_object: ScriptObject = script.__get_script_class__(object)
                                this.event_module.addSubcriberOn("onStart", script_object.onStart.bind(script_object))
                                this.event_module.addSubcriberOn("onUpdate", script_object.onUpdate.bind(script_object))
                            });
                        }
                    }
                });
            });
            //@ts-ignore
            globalThis.core = {
                file_system: this.file_system,
                object_module: this.object_module,
                input_module: this.input_module,
                event_module: this.event_module,
                time: {
                    deltaTime: 0
                }
            }
            //@ts-ignore
            globalThis.core.math = {
                distanse: (obj_one: Primitive, obj_two: Primitive) => {
                    let dif_x = obj_one.transform.position.x - obj_two.transform.position.x
                    let dif_y = obj_one.transform.position.y - obj_two.transform.position.y
                    return Math.sqrt(Math.abs(dif_x * dif_x + dif_y * dif_y))
                },
                norm_vec: (obj_one: Primitive, obj_two: Primitive) => {
                    let dif_x = obj_two.transform.position.x - obj_one.transform.position.x
                    let dif_y = obj_two.transform.position.y - obj_one.transform.position.y
                    let dist = Math.sqrt(Math.abs(dif_x * dif_x + dif_y * dif_y))
                    return {
                        x: dif_x / dist, y: dif_y / dist
                    }
                }
            }
            this.app.stage.sortChildren()

            let onUpdate = this.event_module.getEvent("onUpdate")
            this.app.ticker.remove(this.update)

            this.update = (delta: number) => {
                //@ts-ignore
                globalThis.core.time.deltaTime = delta
                onUpdate?.execute()
            }
            this.animate()
        }
    }

    startTest() {
        let onStart = this.event_module.getEvent("onStart")
        onStart?.execute()
    }

    update(delta: number) {
    }

    render() {
    }

    animate() {
        let elapsed = 0.0;
        this.startTest()
        this.app.ticker.add(this.update);
    }
}