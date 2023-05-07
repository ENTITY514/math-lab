import { nanoid } from "nanoid"
import style from "./projects_list.module.css"
import { Title } from "../../../../../../../../UI/Title/title"
import { Engine } from "../../../../../../../../Engine/core"
import { useNavigate } from "react-router-dom"
import { __Projects__ } from "../../../../../../../../Store/projects___"

interface IProjectListProps {
    projects: Array<{
        name: string
        id: string
    }>
}

export const ProjectsList: React.FC<IProjectListProps> = ({ projects }) => {
    const nav = useNavigate()
    const openProject = (data: string) => {
        nav("/dev/engine")
        new Engine().data_module.create_from_data_set(data)
    }
    return (
        <div className={style.container}>
            <Title title="Проекты" size={1.2} color="inherit" fontWeight="bold" />
            {
                __Projects__.map(project => {
                    return (
                        <div className={style.project} key={nanoid()} onDoubleClick={() => { openProject(JSON.stringify(project.data)) }}>
                            {project.name}
                        </div>
                    )
                })
            }
            {
                projects.map(project => {
                    return (
                        <div className={style.project} key={nanoid()}>
                            {project.name}
                        </div>
                    )
                })
            }
        </div>
    )
}