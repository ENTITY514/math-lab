import React from "react"
import { useAppSelector } from "../../../Store/hooks/redux"
import { Sections } from "../../../Store/models/EngineModels/IEngine"
import { CodeEditor } from "./code_editor/code_editor"
import { MainEditor } from "./main/main_editor"

export const Editor: React.FC = () => {
    const state = useAppSelector(state => state.engineSlice)
    const [update_count, set_update_count] = React.useState<number>(0)
    React.useEffect(() => {
        setInterval(() => set_update_count(update_count+1), 50);
    })
    switch (state.active_section) {
        case Sections.MAIN:
            return <MainEditor />
            
        case Sections.CODE_EDITOR:
            return <CodeEditor />

        case Sections.TEST:
            return <div>Тест</div>

        default:
            return <div>Error</div>
    }
}