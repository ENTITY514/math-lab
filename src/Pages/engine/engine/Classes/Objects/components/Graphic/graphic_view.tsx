import React from "react"
import { Sprite } from "../../ViewObjects/spite"
import { GraphicsComponent } from "./graphic_component"
import style from "./graphic_view.module.css"

interface GraphicViewProps {
    component: GraphicsComponent
}

export const GraphicView: React.FC<GraphicViewProps> = ({ component }) => {
    const alpha_inp_ref = React.useRef<HTMLInputElement>(null)
    const tint_inp_ref = React.useRef<HTMLInputElement>(null)
    const getTintToHex = React.useMemo(() => { return "#" + component.getTint().toString(16) }, [component.object.sprite.tint])
    return (
        <div className={style.container}>
            <div className={style.name}>Graphics</div>
            <div className={style.textureName}>Texture file: {component.getTextureFile() ? component.getTextureFile()?.name : "None File"}</div>
            <div className={style.tint}>Tint: {getTintToHex}</div><input
                ref={tint_inp_ref}
                value={getTintToHex}
                type="color"
                onChange={() => {
                    component.changeTint(Number("0x" + tint_inp_ref.current?.value.slice(1)))
                }}
            />
            <div className={style.opacity}>Alpha: {component.getOpacity()}</div>
            <input
                ref={alpha_inp_ref}
                type="range"
                value={component.getOpacity() * 100}
                max={100} min={0}
                onChange={() => { component.changeOpacity(Number(alpha_inp_ref.current?.value) / 100) }}
            />
        </div>
    )
}