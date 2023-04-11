import { nanoid } from "nanoid"
import style from "./projects.module.css"
import React from "react"
import { CreateProject } from "./Components/CreateProject/create_project"
import { ProjectChoice } from "./Components/ChoiceProject/choice_project"
import { Button } from "../../../../UI/Button/button"

export const Projects: React.FC = () => {
    const [isCreate, setIsCreate] = React.useState(false)

    return (
        <div className={style.container}>
            {isCreate ? <CreateProject /> : <ProjectChoice />}
            <Button text={isCreate ? "Выбрать проект" : "Создать проект"} onClick={() => { setIsCreate(prev => !prev) }} />
        </div>
    )
}