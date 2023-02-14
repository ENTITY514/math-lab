import React from "react"
import { Button } from "../../../../../../Components/Button/button"
import { DropDownMenu } from "../../../../../../Components/DropDownMenu/drop-down-menu"
import { Assets } from "../../../../assets/get"
import { tools_name } from "../../../../engine/Classes/Modules/ToolsM/tools_module"
import { Engine } from "../../../../engine/main"
import style from "./tools.module.css"

export const Tools: React.FC = () => {
    const enigne = new Engine()
    const actions = [{
        title: "Создать обьект",
        action: () => { enigne.object_module.createObject() }
    }]
    const [, set_update_count] = React.useState<boolean>(false)
    React.useEffect(() => {
        const interval = setInterval(() => set_update_count(prev => !prev), 100);
        return () => {
            clearInterval(interval)
        }
    })
    return (
        <div className={style.container} >
            <div className={style.tool}>
                <DropDownMenu src={Assets.add} list={actions} />
            </div>
            <div className={style.tool}>
                <Button 
                url={Assets.transform_position} 
                is_active={enigne.tool_module.active_tool.name==tools_name.TRANSFORM_TOOL}
                action={() => { enigne.tool_module.change_tool(tools_name.TRANSFORM_TOOL) }} />
            </div>
            <div className={style.tool}>
                <Button 
                url={Assets.transform_size} 
                is_active={enigne.tool_module.active_tool.name==tools_name.SIZE_TOOL}
                action={() => { enigne.tool_module.change_tool(tools_name.SIZE_TOOL) }} />
            </div>
            
            <div className={style.tool}>
                <Button 
                url={Assets.transofrm_rotation} 
                is_active={enigne.tool_module.active_tool.name==tools_name.ROTATE_TOOL}
                action={() => { enigne.tool_module.change_tool(tools_name.ROTATE_TOOL) }} />
            </div>

        </div >
    )
}