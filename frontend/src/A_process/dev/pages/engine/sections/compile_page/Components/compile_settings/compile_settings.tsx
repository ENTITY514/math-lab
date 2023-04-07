import React from "react"
import style from "./compile_setting.module.css"
import { Button } from "../../../../../../../../UI/Button/button"
import { InputWithName } from "../../../../../../../../UI/NameWithInput/input_with_name"
import { Assets } from "../../../../../../../../assets/get"

export interface ICompilationSettingsProps {
    change_selection: (value: boolean) => void
}

export const CompilationSettings: React.FC<ICompilationSettingsProps> = ({ change_selection }) => {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <h2 className={style.title}>
                    Настройки экспорта
                </h2>
                <Button url={Assets.turn_back} is_active={false} action={() => { change_selection(true) }} />
                <InputWithName title={""} onEnter={(value: string) => { }} placeHolder={"Введите название проекта..."} />
            </div>
        </div>
    )
}