import style from "./projects.module.css"
import React from "react"
import { CreateProject } from "./Components/CreateProject/create_project"
import { ProjectChoice } from "./Components/ChoiceProject/choice_project"
import { Link, Route, Routes } from "react-router-dom"
import { OpenProjectFromFile } from "./Components/OpenFromFile/open_from_file"

export const Projects: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.links}>
                <Link to="create" className={style.link}>Создать проект</Link>
                <Link to="open_from_file" className={style.link}>Открыть проект из файла</Link>
                <Link to="" className={style.link}>Выбрать проект</Link>
            </div>
            <Routes  >
                <Route path="" element={<ProjectChoice />} />
                <Route path="/create/*" element={<CreateProject />} />
                <Route path="/open_from_file/*" element={<OpenProjectFromFile />} />
            </Routes>
        </div>
    )
}