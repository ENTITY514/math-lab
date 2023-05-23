import { Engine } from "../../core";
import { Tool } from "./tool/tool";

export class UserTools {
    tools: Array<Tool>
    engine: Engine;
    constructor(engine: Engine) {
        this.engine = engine
        this.tools = []
    }

    createTool() {
        let tool = new Tool(this.engine)
        this.tools.push(tool)
    }

    addTool(tool: Tool) {
        this.tools.push(tool)
    }
}