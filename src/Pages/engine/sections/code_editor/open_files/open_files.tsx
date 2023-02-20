import React from "react"
import { ScriptFile } from "../../../engine/Classes/Objects/DataObjects/script_file"
import { Engine } from "../../../engine/main"
import style from "./open_files.module.css"

export const OpenFiles: React.FC = () => {
    const engine = new Engine()
    const script_module = engine.script_module
    const [, set_update_count] = React.useState<boolean>(false)
    React.useEffect(() => {
        const interval = setInterval(() => set_update_count(prev => !prev), 100);
        return () => {
            clearInterval(interval)
        }
    })
    return (
        <div className={style.container}>
            {
                script_module.last_editable_files.map((file: ScriptFile) => {
                    return (
                        <div className={style.file} onClick={() => { engine.script_module.set_active_file(file) }}>
                            {file.__file_view__("linear")}
                        </div>
                    )
                })
            }
        </div>
    )
}