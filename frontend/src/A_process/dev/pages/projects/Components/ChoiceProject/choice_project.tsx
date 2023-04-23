import style from "./choice_project.module.css"
import React from "react"
import { ProjectsList } from "./Components/ProjectList/projects_list"
import { ProjectInfo } from "./Components/ProjectInfo/project_info"
import { Button } from "../../../../../../UI/Button/button"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { StandartBox } from "../../../../../../UI/StandartBox/standart_box"

interface ProjectData {
    name: string
    description: string
    type: string
    id: string
    data: string
}

export const ProjectChoice: React.FC = () => {
    const nav = useNavigate()
    const projects_data = localStorage.getItem("projects_list")
    let projects = JSON.parse(projects_data ? projects_data : "[]") as Array<ProjectData>

    return (
        <div className={style.container}>
            <ProjectsList projects={projects} />
            <ProjectInfo project={projects[0]} />
        </div>
    )
}