import React, { useMemo } from "react"
import { Engine } from "../../../../../Engine/main"
import style from "./files.module.css"

export const Files: React.FC = () => {
    const engine = new Engine()
    const files = engine.script_module.files
    const [, set_update_count] = React.useState<boolean>(false)
    React.useEffect(() => {
        const interval = setInterval(() => set_update_count(prev => !prev), 200);
        return () => {
            clearInterval(interval)
        }
    }, [])
    const render_files = React.useMemo(() => {
        return files.map((file) => {
            return (
                <div
                    className={engine.script_module.active_file === file ? style.active_file : style.file}
                    onDoubleClick={() => { engine.script_module.set_active_file(file) }}
                    key={file.id}>
                    {file.__file_view__("linear")}
                </div>
            )
        })
    }, [engine.script_module.active_file])
    return (
        <div className={style.container}>
            {
                render_files
            }
        </div>
    )
}