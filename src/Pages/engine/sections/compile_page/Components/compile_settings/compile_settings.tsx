import React from "react"
import { Button } from "../../../../../../Components/Button/button"
import { Assets } from "../../../../assets/get"
import style from "./compile_setting.module.css"

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
            </div>
        </div>
    )
}