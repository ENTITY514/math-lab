import { Engine } from "../../../main";
import { TransformTool } from "./transform_tool";

export class ToolModule {
    engine: Engine = new Engine()
    tools: Array<any> = []
    constructor() {
        this.tools.push(new TransformTool(this.engine))
    }
}