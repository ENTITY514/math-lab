import { useNavigate } from "react-router-dom"
import { Button } from "../../../../../../../../UI/Button/button"
import { Text } from "../../../../../../../../UI/Text/text"
import { Title } from "../../../../../../../../UI/Title/title"
import style from "./project_info.module.css"

interface IProjectInfoProps {
    project: {
        name: string
        description: string
        type: string
    } | undefined
}

export const ProjectInfo: React.FC<IProjectInfoProps> = ({ project }) => {
    let nav = useNavigate()
    return (
        <div className={style.container}>
            {project ? <div> <Title size={2} title={project.name} />
                <Text>{project.description}</Text>
                <Text>{String("Type:" + project.type)}</Text>
                <Button text="Открыть проект" onClick={() => { nav("engine"); localStorage.setItem("active_project", JSON.stringify(project)) }} />
            </div> : <Text>Проектов нет</Text>}
        </div>
    )
}