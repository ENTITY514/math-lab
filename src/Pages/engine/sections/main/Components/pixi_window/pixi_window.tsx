import React from "react"
import { PIXI_ENGINE } from "../../../../engine/main"
import style from "./pixi_window.module.css"

export const PixiWindow: React.FC = () => {
    const view_ref = React.useRef(null)
    const engine = new PIXI_ENGINE()
    React.useEffect(() => {
        if(view_ref.current){
            engine.addView(view_ref.current)
        }
    },[])
    return (
        <div ref={view_ref} className={style.container}>
        </div>
    )
}