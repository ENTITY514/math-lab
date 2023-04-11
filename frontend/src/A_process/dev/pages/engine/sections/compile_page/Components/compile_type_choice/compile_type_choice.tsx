import React from "react"
import style from "./compile_type_choice.module.css"
import { Text } from "../../../../../../../../UI/Text/text"
import { Button } from "../../../../../../../../UI/Button/button"
import { useNavigate } from "react-router-dom"


export const CompilationTypeChoice: React.FC = () => {
    let nav = useNavigate()
    return (
        <div className={style.container}>
            <div className={style.compile_settings}>
                <Text>Выбор типа экспорта</Text>
                <Button text={"HTML"} onClick={() => { nav("JSON") }} />
                <Button text={"JSON"} onClick={() => { nav("JSON") }} />
            </div>
        </div>
    )
}