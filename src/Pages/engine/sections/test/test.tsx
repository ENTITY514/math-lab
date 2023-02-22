import React from "react"
import { PixiWindow } from "./components/pixi_window/pixi_window"
import style from "./test.module.css"

export const Test: React.FC = () => {
    return (
        <div className={style.container}>
            <PixiWindow />
        </div>
    )
}