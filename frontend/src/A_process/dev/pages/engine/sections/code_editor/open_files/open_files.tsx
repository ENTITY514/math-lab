import React from "react"
import style from "./open_files.module.css"
import { Engine } from "../../../../../../../Engine/core"
import { ScriptFile } from "../../../../../../../Engine/Classes/Objects/DataObjects/script_file"

export const OpenFiles: React.FC = () => {
    const engine = new Engine()
    const script_module = engine.script_module
    const [, set_update_count] = React.useState<boolean>(false)
    React.useEffect(() => {
        const interval = setInterval(() => set_update_count(prev => !prev), 100);
        return () => {
            clearInterval(interval)
        }
    },[])
    return (
        <div className={style.container}>
            {
                script_module.last_editable_files.map((file: ScriptFile) => {
                    return (
                        <div
                            className={style.file}
                            key={file.id}
                        >
                            <div className={style.wrapper}>
                                <div
                                    onClick={() => { engine.script_module.set_active_file(file) }}>
                                    {file.__file_view__("linear")}
                                </div>
                                <div className={style.remove} onClick={() => { engine.script_module.remove_editable_file(file) }}>x</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}