import React from "react"
import style from "./html_compilation.module.css"
import { Engine } from "../../../../../../../../Engine/core"

export const HTMLCompilation: React.FC = () => {
    const engine = React.useRef(new Engine())
    return (
        <div className={style.container}>
            HTML Compilator
        </div>
    )
}