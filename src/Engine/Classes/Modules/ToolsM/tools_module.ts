import { Engine } from "../../../main";
import { RotateTool } from "./rotate_tool";
import { SizeTool } from "./size_tool";
import { TransformTool } from "./transform_tool";

export enum tools_name {
    TRANSFORM_TOOL,
    SIZE_TOOL,
    ROTATE_TOOL,
}

export class ToolModule {
    engine: Engine
    tools: Array<any>
    tool_state: boolean;
    active_tool: any
    constructor(engine: Engine) {
        this.engine = engine
        this.tool_state = false
        this.tools = []
        this._create_tool()
        this.active_tool = this.tools[0]
    }

    private _create_tool() {
        this.tools.push(new TransformTool(this.engine))
        this.tools.push(new SizeTool(this.engine))
        this.tools.push(new RotateTool(this.engine))
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

    change_tool(tool_name: tools_name) {

        if (this.active_tool !== null && this.tool_state) {
            this.active_tool.setNonActive()
        }
        this.tools.forEach((tool) => {
            if (tool.name === tool_name) {
                this.active_tool = tool
            }
        });
        if (this.active_tool !== null && this.tool_state) {
            this.active_tool.setActive()
        }
    }

    update() {
        this.active_tool.update()
    }
}