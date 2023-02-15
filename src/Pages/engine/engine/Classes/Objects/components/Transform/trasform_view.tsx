import { Sprite } from "../../ViewObjects/spite"
import style from "./transform_view.module.css"

interface TransformViewProps {
    object: Sprite
}

export const TransformView: React.FC<TransformViewProps> = ({ object }) => {
    return (
        <div className={style.container}>
            <div className={style.name}>Transform</div>
            <div className={style.data}>x: {Math.round(object.transform.position.x)}</div>
            <div className={style.data}>y: {Math.round(object.transform.position.y)}</div>
            <div className={style.data}>Rotation: {Math.round(object.transform.rotation * 100) / 100}</div>
            <div className={style.data}>Angle: {object.transform.angle}</div>
            <div className={style.data}>Width: {object.transform.size.width}</div>
            <div className={style.data}>Height: {object.transform.size.height}</div>
        </div>
    )
}