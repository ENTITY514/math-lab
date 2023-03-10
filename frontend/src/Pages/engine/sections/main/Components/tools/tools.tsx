import React from "react"
import { Assets } from "../../../../../../assets/get"
import { Button } from "../../../../../../Components/Button/button"
import { DropDownMenu } from "../../../../../../Components/DropDownMenu/drop-down-menu"
import { Engine } from "../../../../../../Engine/core"
import { tools_name } from "../../../../../../Engine/Modules/ToolsM/tools_module"
import style from "./tools.module.css"

export const Tools: React.FC = () => {
    const enigne = new Engine()
    const actions = [{
        title: "Создать обьект",
        action: () => { enigne.object_module.createObject() }
    }]
    const [, set_update_count] = React.useState<boolean>(false)
    const changeTool = (tool: tools_name) => {
        enigne.tool_module.change_tool(tool)
        set_update_count(prev => !prev)
    }
    return (
        <div className={style.container} >
            <div className={style.tool}>
                <DropDownMenu src={Assets.add} list={actions} />
            </div>
            <div className={style.tool}>
                <Button
                    url={Assets.transform_position}
                    is_active={enigne.tool_module.active_tool.name == tools_name.TRANSFORM_TOOL}
                    action={() => { changeTool(tools_name.TRANSFORM_TOOL) }} />
            </div>
            <div className={style.tool}>
                <Button
                    url={Assets.transform_size}
                    is_active={enigne.tool_module.active_tool.name == tools_name.SIZE_TOOL}
                    action={() => { changeTool(tools_name.SIZE_TOOL) }} />
            </div>

            <div className={style.tool}>
                <Button
                    url={Assets.transofrm_rotation}
                    is_active={enigne.tool_module.active_tool.name == tools_name.ROTATE_TOOL}
                    action={() => { changeTool(tools_name.ROTATE_TOOL) }} />
            </div>

        </div >
    )
}