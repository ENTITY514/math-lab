import React from "react"
import { CodeEditorSection } from "./code_editor/code_editor-section"
import { CompilePage } from "./compile_page/compile_page"
import { MainEditor } from "./main/main_editor"
import { Test } from "./test/test"
import { useAppSelector } from "../../../../../Store/hooks/redux"
import { Sections } from "../../../../../Store/models/EngineModels/IEngine"

export const Editor: React.FC = () => {
    const active_section = useAppSelector(state => state.engineSlice.active_section)
    switch (active_section) {
        case Sections.MAIN:
            return <MainEditor />
        case Sections.CODE_EDITOR:
            return <CodeEditorSection />
        case Sections.TEST:
            return <Test />
        case Sections.EXPORT:
            return <CompilePage />
        default:
            return <div>Erroe</div>
    }
}