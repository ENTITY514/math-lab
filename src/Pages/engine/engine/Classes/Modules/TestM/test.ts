import { Engine } from "../../../main";
import * as PIXI from "pixi.js"
import { ENGINE_FILE_SYSTEM_MODULE } from "../../Objects/DataObjects/file_system";
import { DataModule } from "../DataM/data_module";
import { ObjectsModule } from "../ObjectsM/objects_module";
import { ScriptModule } from "../ScriptM/script_module";
import { ToolModule } from "../ToolsM/tools_module";

export class Test {
    engine: Engine
    app!: PIXI.Application
    canvasContainer: HTMLDivElement | undefined
    object_module!: ObjectsModule
    data_module!: DataModule
    file_system!: ENGINE_FILE_SYSTEM_MODULE
    script_module!: ScriptModule
    prev: string = ""
    constructor(engine: Engine) {
        this.engine = engine
        this.initRenderer();
        this.render();
        this.file_system = new ENGINE_FILE_SYSTEM_MODULE()
        this.script_module = new ScriptModule(this as unknown as Engine)
        this.object_module = new ObjectsModule(this as unknown as Engine)
        this.data_module = new DataModule(this as unknown as Engine)
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
        }
    }

    update() {
    }

    render() {
    }

    animate() {
        let elapsed = 0.0;
        this.app.ticker.add((delta) => {
        });
    }
}