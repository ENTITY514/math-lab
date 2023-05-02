import React from "react"
import style from "./inputs_window.module.css"
import { Engine } from "../../../../../../../../Engine/core"

export const InputWindow: React.FC = () => {
    const engine = new Engine()
    return (
        <div className={style.container}>
            {engine.test_module.input_module.__get_input_react_view__()}
        </div>
    )
}