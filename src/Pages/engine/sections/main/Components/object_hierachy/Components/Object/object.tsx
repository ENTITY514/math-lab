import { Primitive } from "../../../../../../engine/Classes/Objects/ViewObjects/primitive"
import { Engine } from "../../../../../../engine/main"
import style from "./object.module.css"

interface IObjectProps {
    object: Primitive
}

export const Object: React.FC<IObjectProps> = ({ object }) => {
    const engine = new Engine()
    const clickHandler = () => {
        engine.object_module.setActiveObject(object)
    }
    return (
        <div className={engine.object_module.active_object === object ? style.active_container : style.container} onClick={clickHandler}>
            {object.name}
        </div>
    )
}