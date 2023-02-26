import React from "react"
import { Engine } from "../../engine/main"
import { PixiWindow } from "./components/pixi_window/pixi_window"
import style from "./test.module.css"

export const Test: React.FC = () => {
    const engine = new Engine()
    React.useEffect(() => {
        engine.updateActiveWindow("test")
    }, [])
    return (
        <div className={style.container}>
            <PixiWindow />
        </div>
    )
}