import style from "./choice_project.module.css"
import React from "react"
import { ProjectsList } from "./Components/ProjectList/projects_list"
import { ProjectInfo } from "./Components/ProjectInfo/project_info"

export const ProjectChoice: React.FC = () => {
    return (
        <div className={style.container}>
            <ProjectsList projects={[]} />
            <ProjectInfo project={undefined} />
        </div>
    )
}