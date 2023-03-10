import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../../Store/hooks/redux"
import { Sections } from "../../../../Store/models/EngineModels/IEngine"
import { EngineSlice } from "../../../../Store/reducers/engineSlice"
import style from "./sections.module.css"

export const SectionsChoice: React.FC = () => {
    const state = useAppSelector(state => state.engineSlice)
    const dispatch = useAppDispatch()
    const { changeActiveSection: changeSection } = EngineSlice.actions
    const handleClick = (section: Sections) => {
        dispatch(changeSection(section))
    }
    return (
        <div className={style.container}>
            <div
                className={state.active_section === Sections.MAIN ? style.active_section : style.section}
                onClick={() => { handleClick(Sections.MAIN) }}
            >
                Основной редактор
            </div>
            <div className={state.active_section === Sections.CODE_EDITOR ? style.active_section : style.section}
                onClick={() => { handleClick(Sections.CODE_EDITOR) }}
            >
                Текстовый редактор
            </div>
            <div
                className={state.active_section === Sections.TEST ? style.active_section : style.section}
                onClick={() => { handleClick(Sections.TEST) }}
            >
                Тест
            </div>
            <div
                className={state.active_section === Sections.EXPORT ? style.active_section : style.section}
                onClick={() => { handleClick(Sections.EXPORT) }}
            >
                Экспорт
            </div>
        </div >
    )
}