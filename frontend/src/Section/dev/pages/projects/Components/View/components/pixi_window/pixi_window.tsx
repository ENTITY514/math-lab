import React from "react"
import style from "./pixi_window.module.css"
import { Engine } from "../../../../../../../../Engine/core"

export const PixiWindow: React.FC = () => {
    const view_ref = React.useRef(null)
    const engine = new Engine()
    React.useEffect(() => {
        if (view_ref.current) {
            engine.view.addView(view_ref.current)
        }
        engine.view.build_app_from_data_set(engine.data_module.create_data_set())
    }, [])
    return (
        <div ref={view_ref} className={style.container}>
        </div>
    )
}