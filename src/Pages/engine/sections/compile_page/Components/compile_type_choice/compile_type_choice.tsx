import React from "react"
import style from "./compile_type_choice.module.css"

export interface ICompilationTypeChoiceProps {
    change_selection: (value: boolean) => void
}

export const CompilationTypeChoice: React.FC<ICompilationTypeChoiceProps> = ({change_selection}) => {
    return (
        <div className={style.container}>
            <div className={style.compile_settings}>
                Выбор типа экспорта
                <div onClick={() => { change_selection(false) }}>HTML</div>
            </div>
        </div>
    )
}