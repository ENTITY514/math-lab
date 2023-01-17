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
            <div className={style.section} onClick={() => { handleClick(Sections.MAIN) }}>Основной редактор</div>
            <div className={style.section} onClick={() => { handleClick(Sections.CODE_EDITOR) }}>Редактор кода</div>
        </div>
    )
}