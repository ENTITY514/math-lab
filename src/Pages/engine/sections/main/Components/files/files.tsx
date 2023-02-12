import { File } from "../../../../engine/Classes/Objects/DataObjects/file"
import { Engine } from "../../../../engine/main"
import style from "./files.module.css"

export const Files: React.FC = () => {
    const engine = new Engine()
    const files = engine.file_system.active_dir.childs
    return (
        <div className={style.container}>
            {
                files.map(file => {
                    return file.__file_view__("little")
                })
            }
        </div>
    )
}