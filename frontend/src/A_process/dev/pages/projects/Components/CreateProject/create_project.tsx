import { nanoid } from "nanoid"
import { Button } from "../../../../../../UI/Button/button"
import { InputUI } from "../../../../../../UI/InputUI/input"
import { Text } from "../../../../../../UI/Text/text"
import { Title } from "../../../../../../UI/Title/title"
import style from "./create_project.module.css"
import React from "react"
import { useNavigate } from "react-router-dom"
import { Engine } from "../../../../../../Engine/core"

export interface IProjectData {
    name: string,
    type: string,
    description: string
    id: string
    data: string
}

export const CreateProject: React.FC = () => {
    const nav = useNavigate()
    const [state, setState] = React.useState({
        name: "",
        type: "Presentation",
        description: "",
        id: nanoid(),
        data: ""
    })

    const Create = () => {
        //логика создания проекта и отправка его на сервер
        nav("/dev/engine")
        new Engine().data_module.clearProject()
    }

    return (
        <div className={style.container}>
            <Title title={"Создание проекта"} size={2} />
            <InputUI placeHolder="Введите название проекта..." width="100%" height="auto" onChange={(value) => { setState(prev => { return { ...prev, name: value } }) }} />
            <InputUI placeHolder="Введите описание проекта..." width="100%" height="auto" onChange={(value) => { setState(prev => { return { ...prev, description: value } }) }} />
            <Text>Type: Presentation</Text>
            <Button text={"Создать проект"} onClick={Create} />
        </div>
    )
}