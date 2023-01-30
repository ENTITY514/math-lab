import { Sprite } from "../../ViewObjects/spite"
import style from "./transform_view.module.css"

interface TransformViewProps {
    object: Sprite
}

export const TransformView: React.FC<TransformViewProps> = ({ object }) => {
    return (
        <div className={style.container}>
            <div className={style.data}>{object.transform.position.x}</div>
            <div className={style.data}>{object.transform.position.y}</div>
            <div className={style.data}>{object.transform.rotation}</div>
            <div className={style.data}>{object.transform.size.width}</div>
        </div>
    )
}