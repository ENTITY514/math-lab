import { Sprite } from "../../ViewObjects/spite"
import style from "./graphic_view.module.css"

interface GraphicViewProps {
    object: Sprite
}

export const GraphicView: React.FC<GraphicViewProps> = ({ object }) => {
    return (
        <div className={style.container}>
            Графический компонент
        </div>
    )
}