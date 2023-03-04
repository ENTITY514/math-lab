import React from "react"
import { Engine } from "../../../../../../../Engine/core"
import style from "./create_file.module.css"

export const CreateFile: React.FC = () => {
    const engine = new Engine()
    const createFile = () => {
        engine.script_module.create_file()
    }
    return (
        <div className={style.container} onClick={createFile}>
            Создать скрипт
        </div>
    )
}