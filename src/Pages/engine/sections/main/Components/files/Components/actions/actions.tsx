import { Engine } from "../../../../../../../../Engine/core"
import { FolderCreator } from "../FolderCreator/folder_creator"
import { SortFiles } from "../sort_file/sort_files"
import style from "./actions.module.css"

export const Actions: React.FC = () => {
    const engine = new Engine()
    return (
        <div className={style.container}>
            <FolderCreator createFolder={() => { engine.file_system.createDefaultDir() }} />
            <SortFiles setSortType={(type: any) => { engine.file_system.setSortType(type) }} />
        </div>
    )
}