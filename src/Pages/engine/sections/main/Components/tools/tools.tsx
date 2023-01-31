import { DropDownMenu } from "../../../../../../Components/DropDownMenu/drop-down-menu"
import { Assets } from "../../../../assets/get"
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
        </div >
    )
}