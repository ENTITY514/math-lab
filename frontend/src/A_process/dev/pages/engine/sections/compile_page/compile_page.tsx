import React from "react"
import style from "./compilation_page.module.css"
import { CompilationSettings } from "./Components/compile_settings/compile_settings"
import { CompilationTypeChoice } from "./Components/compile_type_choice/compile_type_choice"
import { Engine } from "../../../../../../Engine/core"

export const CompilePage: React.FC = () => {
    const engine = React.useRef(new Engine())
    React.useEffect(() => {
        engine.current.updateActiveWindow("compile")
    }, []);
    const [is_compile_type_choice, set_is_compile_type_choice] = React.useState<Boolean>(true)
    return (
        <div className={style.container}>
            {
                is_compile_type_choice ?
                    <CompilationTypeChoice change_selection={set_is_compile_type_choice} /> 
                    :
                    <CompilationSettings change_selection={set_is_compile_type_choice} />
            }
        </div>
    )
}