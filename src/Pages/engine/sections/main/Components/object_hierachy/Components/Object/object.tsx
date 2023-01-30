import { Entity } from "../../../../../../engine/Classes/Objects/ViewObjects/entity"
import style from "./object.module.css"

interface IObjectProps {
    object: Entity
}

export const Object: React.FC<IObjectProps> = ({ object }) => {
    return (
        <div className={style.container}>
            {object.name}
        </div>
    )
}