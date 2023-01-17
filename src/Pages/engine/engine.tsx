import { useAppDispatch, useAppSelector } from "../../Store/hooks/redux"
import { Sections } from "../../Store/models/EngineModels/IEngine"
import { SectionsChoice } from "./Components/sections/sections"
import style from "./engine.module.css"
import { CodeEditor } from "./sections/code_editor/code_editor"
import { MainEditor } from "./sections/main/main_editor"

export const EnginePage: React.FC = () => {
    const state = useAppSelector(state => state.engineSlice)
    if (state.active_section === Sections.MAIN) {
        return (
            <div className={style.container}>
                <SectionsChoice />
                <MainEditor />
            </div>
        )
    }
    else if (state.active_section === Sections.CODE_EDITOR) {
        return (
            <div className={style.container}>
                <SectionsChoice />
                <CodeEditor />
            </div>
        )
    }
    else {
        return (
            <div className={style.container}>
                Error
            </div>
        )
    }
}