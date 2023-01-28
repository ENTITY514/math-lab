import React from "react"
import { Engine } from "../../engine/main"
import { Console } from "./Components/console/console"
import { Files } from "./Components/files/files"
import { PixiWindow } from "./Components/pixi_window/pixi_window"
import { Properties } from "./Components/properties/properties"
import { Tools } from "./Components/tools/tools"
import style from "./main_editor.module.css"

export const MainEditor: React.FC = () => {
    const engine = React.useRef(new Engine())
    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.window}>
                    <PixiWindow />
                    <Tools />
                </div>
                <div className={style.box2}>
                    <Console />
                    <Files />
                </div>
            </div>
            <Properties />
        </div>
    )
}