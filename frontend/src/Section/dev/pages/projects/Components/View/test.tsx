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
    const [, set_update_count] = React.useState<boolean>(false)
    React.useEffect(() => {
        const interval = setInterval(() => set_update_count(prev => !prev), 300);
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div className={engine.test_module.input_module.inputs.length ? style.container : style.mono_container}>
            <PixiWindow />
            {engine.test_module.input_module.inputs.length ?
                <InputWindow /> : null}
        </div>
    )
}