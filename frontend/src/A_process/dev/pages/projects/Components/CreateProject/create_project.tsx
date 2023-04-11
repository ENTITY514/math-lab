import { nanoid } from "nanoid"
import { Button } from "../../../../../../UI/Button/button"
import { InputUI } from "../../../../../../UI/InputUI/input"
import { InputWithName } from "../../../../../../UI/NameWithInput/input_with_name"
import { Text } from "../../../../../../UI/Text/text"
import { Title } from "../../../../../../UI/Title/title"
import style from "./create_project.module.css"
import React from "react"

export const CreateProject: React.FC = () => {
    const [state, setState] = React.useState({
        name: "",
        type: "Game",
        description: "",
        id: nanoid(),
        data: ""
    })

    const Create = () => {
        let project_data = localStorage.getItem("projects_list")
        let projects = JSON.parse(project_data ? project_data : "[]") as Array<{
            name: string,
            type: string,
            description: string
            id: string
            data: string
        }>
        localStorage.setItem(state.name, JSON.stringify(state))
        projects.push(state)
        localStorage.setItem("projects_list", JSON.stringify(projects))
    }
    return (
        <div className={style.container}>
            <Title title={"Создание проекта"} size={2} />
            <InputUI placeHolder="Введите название проекта..." width="100%" height="auto" onChange={(value) => { setState(prev => { return { ...prev, name: value } }) }} />
            <InputUI placeHolder="Введите описание проекта..." width="100%" height="auto" onChange={(value) => { setState(prev => { return { ...prev, description: value } }) }} />
            <Text>Type: Game</Text>
            <Button text={"Создать проект"} onClick={Create} />
        </div>
    )
}