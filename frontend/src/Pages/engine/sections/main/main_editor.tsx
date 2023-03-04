import React from "react"
import { Engine } from "../../../../Engine/core"
import { Console } from "./Components/console/console"
import { Files } from "./Components/files/files"
import { Objects } from "./Components/object_hierachy/objects"
import { PixiWindow } from "./Components/pixi_window/pixi_window"
import { Properties } from "./Components/properties/properties"
import { Tools } from "./Components/tools/tools"
import style from "./main_editor.module.css"

export const MainEditor: React.FC = () => {
    const engine = React.useRef(new Engine())
    React.useEffect(() => {
        engine.current.updateActiveWindow("main")
    }, [])
    return (
        <div className={style.container}>
            <Objects />
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