import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../../Store/hooks/redux"
import { Sections } from "../../../../Store/models/EngineModels/IEngine"
import { EngineSlice } from "../../../../Store/reducers/engineSlice"
import style from "./sections.module.css"

export const SectionsChoice: React.FC = () => {
    const state = useAppSelector(state => state.engineSlice)
    const dispatch = useAppDispatch()
    const { changeSection } = EngineSlice.actions
    const handleClick = (section: Sections) => {
        dispatch(changeSection(section))
    }
    return (
        <div className={style.container}>
            <Link className={style.section} to="main" >Основной редактор</Link>
            <Link className={style.section} to="code" >Текстовый редактор</Link>
            <Link className={style.section} to="test" >Тест</Link>
        </div>
    )
}