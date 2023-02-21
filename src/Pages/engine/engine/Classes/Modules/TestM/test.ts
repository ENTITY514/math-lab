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
    test_module!: Test
    object_module!: ObjectsModule
    data_module!: DataModule
    tool_module!: ToolModule
    dev_file_system!: ENGINE_FILE_SYSTEM_MODULE
    file_system!: ENGINE_FILE_SYSTEM_MODULE
    script_module!: ScriptModule
    constructor(engine: Engine) {
        this.engine = engine
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