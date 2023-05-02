import React from "react"
import { PixiWindow } from "./components/pixi_window/pixi_window"
import style from "./test.module.css"
import { Engine } from "../../../../../../Engine/core"
import { InputWindow } from "./components/inputs/inputs_window"

export const View: React.FC = () => {
    const engine = new Engine()
    React.useEffect(() => {
        engine.updateActiveWindow("view")
    }, [])
    return (
        <div className={style.container}>
            <PixiWindow />
        </div>
    )
}