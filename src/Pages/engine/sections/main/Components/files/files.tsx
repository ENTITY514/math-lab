import React from "react"
import { File } from "../../../../engine/Classes/Objects/DataObjects/file"
import { Engine } from "../../../../engine/main"
import { Actions } from "./Components/actions/actions"
import style from "./files.module.css"

export const Files: React.FC = () => {
    const engine = new Engine()
    const files = engine.file_system.active_dir.childs
    const [, set_update_count] = React.useState<boolean>(false)
    React.useEffect(() => {
        const interval = setInterval(() => set_update_count(prev => !prev), 50);
        return () => {
            clearInterval(interval)
        }
    })
    return (
        <div className={style.container}>
            <Actions />
            <div className={style.files}>
                {
                    files.map(file => {
                        return file.__file_view__("little")
                    })
                }
            </div>
        </div>
    )
}