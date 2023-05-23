import React from "react"
import style from "./create_tool.module.css"
import { Engine } from "../../../../../../../../../Engine/core"

export const CreateTool: React.FC = () => {
    const engine = new Engine()
    const createFile = () => {
        engine.script_module.create_dev_file()
    }
    return (
        <div className={style.container} onClick={createFile}>
            Создать файл инструмента
        </div>
    )
}