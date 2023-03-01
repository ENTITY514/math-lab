import { Primitive } from "../../../../../../../../Engine/Classes/Objects/ViewObjects/primitive"
import { Engine } from "../../../../../../../../Engine/main"
import style from "./object.module.css"

interface IObjectProps {
    object: Primitive
    index: number
}

export const Object: React.FC<IObjectProps> = ({ object, index }) => {
    const engine = new Engine()
    const clickHandler = () => {
        engine.object_module.setActiveObject(object)
    }
    return (
        <div
            className={engine.object_module.active_object === object ? style.active_container : style.container}
            onClick={clickHandler}
        >
            <div className={style.index}>{index}</div>
            <div className={style.name}>{object.name}</div>
        </div>
    )
}