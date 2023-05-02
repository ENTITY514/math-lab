import React from "react"
import { Primitive } from "../../ViewObjects/primitive"
import style from "./transform_view.module.css"

interface TransformViewProps {
    object: Primitive
}

export const TransformView: React.FC<TransformViewProps> = ({ object }) => {
    const z_index_ref = React.useRef<HTMLInputElement>(null)
    return (
        <div className={style.container}>
            <div className={style.name}>Transform</div>
            <div className={style.data}>x: {Math.round(object.transform.position.x)}</div>
            <div className={style.data}>y: {Math.round(object.transform.position.y)}</div>
            <div className={style.data}>Rotation: {Math.round(object.transform.rotation * 100) / 100}</div>
            <div className={style.data}>Angle: {object.transform.angle}</div>
            <div className={style.data}>Width: {object.transform.size.width}</div>
            <div className={style.data}>Height: {object.transform.size.height}</div>
            <div className={style.opacity}>z:</div>
            <input
                ref={z_index_ref}
                type="number"
                value={Math.round(object.display_object.zIndex)}
                onChange={() => {
                    object.display_object.zIndex = Math.round(Number(z_index_ref.current?.value))
                    object.display_object.parent.sortChildren()
                }}
            />
        </div>
    )
}