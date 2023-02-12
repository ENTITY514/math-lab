import { Engine } from "../../../main";
import { TransformTool } from "./transform_tool";

export class ToolModule {
    engine: Engine
    transform_tool: TransformTool;
    tool_state: boolean;
    active_tool: any
    constructor(engine: Engine) {
        this.engine = engine
        this.tool_state = false
        this.transform_tool = new TransformTool(this.engine)
        this.active_tool = this.transform_tool
    }

    update_tool_state(state: boolean) {
        this.tool_state = state
        if (this.tool_state) {
            this.active_tool.setActive()
        }
        else {
            this.active_tool.setNonActive()
        }
    }

    update() {
        this.active_tool.update()
    }
}