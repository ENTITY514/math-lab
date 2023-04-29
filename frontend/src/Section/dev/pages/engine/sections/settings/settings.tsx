import React from "react"
import style from "./settings.module.css"
import { Engine } from "../../../../../../Engine/core"
import { Text } from "../../../../../../UI/Text/text"
import { InputUI } from "../../../../../../UI/InputUI/input"

export const Settings: React.FC = () => {
    const engine = new Engine()
    const data_module = engine.data_module
    console.log(data_module);
    
    return (
        <div className={style.container}>
            <Text >Имя проекта:</Text><InputUI placeHolder="Введите имя проекта" onChange={value => data_module.project_data.name = value} title={data_module.project_data.name}/>
            <Text >Настройки экрана:</Text><div>
            <InputUI placeHolder="Введите ширину" onChange={value => data_module.project_data.screen_settings.width = value} title={data_module.project_data.screen_settings.width}/>
            <InputUI placeHolder="Введите высоту" onChange={value => data_module.project_data.screen_settings.height = value} title={data_module.project_data.screen_settings.height}/>
            </div>
        </div>
    )
}