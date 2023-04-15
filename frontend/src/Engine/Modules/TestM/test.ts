import * as PIXI from "pixi.js"
import { DataModule } from "../DataM/data_module";
import { ObjectsModule } from "../ObjectsM/objects_module";
import { ScriptModule } from "../ScriptM/script_module";
import { ToolModule } from "../ToolsM/tools_module";
import { SpriteData } from "../../Types/objects_interfaces";
import { ScriptObject } from "./script_class";
import { EventModule } from "../EventModule/event_module";
import { ENGINE_FILE_SYSTEM_MODULE } from "../../Classes/Objects/DataObjects/file_system";
import { Engine } from "../../core";
import { ScriptComponent } from "../../Classes/Objects/components/Script/script_component";
import { DirectoryData } from "../../Types/file_types";
import { Sprite } from "../../Classes/Objects/ViewObjects/sprite";

export class Test {
    engine: Engine
    app!: PIXI.Application
    canvasContainer: HTMLDivElement | undefined
    object_module!: ObjectsModule
    data_module!: DataModule
    file_system!: ENGINE_FILE_SYSTEM_MODULE
    script_module!: ScriptModule
    event_module: EventModule
    prev: string = ""
    constructor(engine: Engine) {
        this.engine = engine
        this.initRenderer();
        this.render();
        this.file_system = new ENGINE_FILE_SYSTEM_MODULE()
        this.script_module = new ScriptModule(this as unknown as Engine)
        this.object_module = new ObjectsModule(this as unknown as Engine)
        this.data_module = new DataModule(this as unknown as Engine)
        this.event_module = new EventModule(this as unknown as Engine)
        this.animate()
    }

    addView(canvasContainer: HTMLDivElement) {
        this.canvasContainer = canvasContainer
        this.canvasContainer.style.display = "grid"
        if (this.canvasContainer.children.length < 1) {
            this.canvasContainer.appendChild(this.app.view);
            this.app.resizeTo = this.canvasContainer
        }
    }

    initRenderer() {
        this.app = new PIXI.Application({ width: 100, height: 100, backgroundColor: 0x000000 });
    }

    build_app_from_data_set(data: string) {
        if (data !== this.prev) {
            this.prev = data
            this.object_module.clear()
            this.event_module.clearAllEvent()
            this.event_module.addEvent("onStart")
            this.event_module.addEvent("onUpdate")
            let parsed_data = JSON.parse(data) as { objects: Array<SpriteData>, file_system: DirectoryData }
            parsed_data.objects.forEach(object => {
                const obj = this.object_module.createObject(object.type)
                obj.__create_from_data(object)
            });
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
            let onUpdate = this.event_module.getEvent("onUpdate")
            this.app.ticker.remove(this.update)
            this.update = (delta: number) => {
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