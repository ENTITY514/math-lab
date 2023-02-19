import React from "react"
import style from "./actions.module.css"
import { CreateFile } from "./Components/CreateFile/create_file"

export const Actions: React.FC = () => {
    return (
        <div className={style.container}>
            <CreateFile />
        </div>
    )
}