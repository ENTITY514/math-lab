import React from "react"
import style from "./compilation_page.module.css"
import { CompilationTypeChoice } from "./Components/compile_type_choice/compile_type_choice"
import { Engine } from "../../../../../../Engine/core"
import { Routes, Route } from "react-router-dom"
import { JSONCompilation } from "./Components/JSONCompilation/json_compilation"
import { HTMLCompilation } from "./Components/HTMLCompilation/html_compilation"

export const CompilePage: React.FC = () => {
    const engine = React.useRef(new Engine())
    React.useEffect(() => {
        engine.current.updateActiveWindow("compile")
    }, []);
    return (
        <div className={style.container}>
            <Routes>
                <Route path='' element={<CompilationTypeChoice />} />
                <Route path='JSON' element={<JSONCompilation />} />
                <Route path='HTML' element={<HTMLCompilation />} />
            </Routes>
        </div>
    )
}