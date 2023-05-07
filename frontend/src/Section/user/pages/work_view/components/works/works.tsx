import { nanoid } from "nanoid"
import { useNavigate } from "react-router-dom"
import { Engine } from "../../../../../../Engine/core"
import { __Projects__ } from "../../../../../../Store/projects___"
import style from "./works.module.css"
import { ImageUI } from "../../../../../../UI/Image/image"
import { Assets } from "../../../../../../assets/get"

export const Works: React.FC = () => {
    const nav = useNavigate()
    const openProject = (data: string) => {
        nav("/dev/view")
        new Engine().data_module.create_from_data_set(data)
    }
    return (
        <div className={style.container}>
            {
                __Projects__.map(project => {
                    return (
                        <div className={style.project} key={nanoid()} onDoubleClick={() => { openProject(JSON.stringify(project.data)) }}>
                            <ImageUI url={project.img_url ? project.img_url : Assets.ui} width="150px" height="150px" />
                            <div className={style.name}>{project.name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}