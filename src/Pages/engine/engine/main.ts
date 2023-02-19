import * as PIXI from "pixi.js"
import { DataModule } from "./Classes/Modules/DataM/data_module"
import { ObjectsModule } from "./Classes/Modules/ObjectsM/objects_module"
import { ScriptModule } from "./Classes/Modules/ScriptM/script_module"
import { Test } from "./Classes/Modules/TestM/test"
import { ToolModule } from "./Classes/Modules/ToolsM/tools_module"
import { ENGINE_FILE_SYSTEM_MODULE } from "./Classes/Objects/DataObjects/file_system"

export class Engine {
    private static _instance: any
    app!: PIXI.Application
    canvasContainer: HTMLDivElement | undefined
    test_module!: Test
    object_module!: ObjectsModule
    data_module!: DataModule
    tool_module!: ToolModule
    dev_file_system!: ENGINE_FILE_SYSTEM_MODULE
    file_system!: ENGINE_FILE_SYSTEM_MODULE
    script_module!: ScriptModule
    constructor() {
        if (typeof Engine._instance === 'object') {
            return Engine._instance
        }
        this.initRenderer();
        this.render();
        this.test_module = new Test(this)
        this.dev_file_system = new ENGINE_FILE_SYSTEM_MODULE()
        this.file_system = new ENGINE_FILE_SYSTEM_MODULE()
        this.script_module = new ScriptModule(this)
        this.object_module = new ObjectsModule(this)
        this.data_module = new DataModule(this)
        this.tool_module = new ToolModule(this)
        this.animate()
        Engine._instance = this
        return Engine._instance
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

    update() {
    }

    render() {
    }

    animate() {
        let elapsed = 0.0;
        this.app.ticker.add((delta) => {
            this.object_module.objects.forEach(object => {
                this.tool_module.update()
            });
        });
    }
}