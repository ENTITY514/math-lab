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
    return (
        <div className={style.container} >
            <div className={style.tool}>
                <DropDownMenu src={Assets.add} list={actions} />
            </div>
            <div className={style.tool}>
                <Button url={Assets.transform_position} action={() => { enigne.tool_module.change_tool(tools_name.TRANSFORM_TOOL) }} />
            </div>
            <div className={style.tool}>
                <Button url={Assets.transform_size} action={() => { enigne.tool_module.change_tool(tools_name.SIZE_TOOL) }} />
            </div>
        </div >
    )
}