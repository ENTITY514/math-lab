import { nanoid } from "nanoid"
import style from "./projects_list.module.css"
import { Title } from "../../../../../../../../UI/Title/title"

interface IProjectListProps {
    projects: Array<{
        name: string
        id: string
    }>
}

export const ProjectsList: React.FC<IProjectListProps> = ({ projects }) => {
    return (
        <div className={style.container}>
            <Title title="Проекты" size={1.2} color="inherit" fontWeight="bold" />
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