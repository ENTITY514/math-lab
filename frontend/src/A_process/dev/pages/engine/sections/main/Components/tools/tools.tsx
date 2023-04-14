import React from "react"
import style from "./tools.module.css"
import { Engine } from "../../../../../../../../Engine/core"
import { tools_name } from "../../../../../../../../Engine/Modules/ToolsM/tools_module"
import { ButtonIcon } from "../../../../../../../../UI/ButtonIcon/button"
import { DropDownMenu } from "../../../../../../../../UI/DropDownMenu/drop-down-menu"
import { Assets } from "../../../../../../../../assets/get"

export const Tools: React.FC = () => {
    const enigne = new Engine()
    const actions = [{
        title: "Создать спрайт",
        action: () => { enigne.object_module.createObject("sprite") }
    },
    {
        title: "Создать Систему Частиц",
        action: () => { enigne.object_module.createObject("ParticleSystem") }
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
                <ButtonIcon
                    url={Assets.transform_position}
                    is_active={enigne.tool_module.active_tool.name == tools_name.TRANSFORM_TOOL}
                    action={() => { changeTool(tools_name.TRANSFORM_TOOL) }} />
            </div>
            <div className={style.tool}>
                <ButtonIcon
                    url={Assets.transform_size}
                    is_active={enigne.tool_module.active_tool.name == tools_name.SIZE_TOOL}
                    action={() => { changeTool(tools_name.SIZE_TOOL) }} />
            </div>

            <div className={style.tool}>
                <ButtonIcon
                    url={Assets.transofrm_rotation}
                    is_active={enigne.tool_module.active_tool.name == tools_name.ROTATE_TOOL}
                    action={() => { changeTool(tools_name.ROTATE_TOOL) }} />
            </div>

        </div >
    )
}