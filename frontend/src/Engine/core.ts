import * as PIXI from "pixi.js"
import { ENGINE_FILE_SYSTEM_MODULE } from "./Classes/Objects/DataObjects/file_system"
import { DevCamera } from "./Classes/Objects/ViewObjects/camera"
import { DataModule } from "./Modules/DataM/data_module"
import { ObjectsModule } from "./Modules/ObjectsM/objects_module"
import { ScriptModule } from "./Modules/ScriptM/script_module"
import { Test } from "./Modules/TestM/test"
import { ToolModule } from "./Modules/ToolsM/tools_module"

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
    dev_camera!: DevCamera
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
        this.dev_camera = new DevCamera(this.app)
        this.animate()
        Engine._instance = this
        return Engine._instance
    }

    addView(canvasContainer: HTMLDivElement) {
        this.canvasContainer = canvasContainer
        this.canvasContainer.style.display = "grid"
        this.app.view.oncontextmenu = function () {
            return false;
        }
        if (this.canvasContainer.children.length < 1) {
            this.canvasContainer.appendChild(this.app.view);
            this.app.resizeTo = this.canvasContainer
        }
    }

    initRenderer() {
        this.app = new PIXI.Application({ width: 100, height: 100, backgroundColor: 0x444444 });
    }

    update() {
    }

    render() {
    }

    updateActiveWindow(active_window: string) {
        if (active_window === "test") {
            this.app.ticker.stop()
            this.test_module.app.start()
        }
        else if (active_window === "main") {
            this.app.ticker.start()
            this.test_module.app.stop()
        }
        else if (active_window === "compile") {
            this.app.ticker.stop()
            this.test_module.app.stop()
        }

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