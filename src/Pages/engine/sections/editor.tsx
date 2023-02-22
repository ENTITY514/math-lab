import React from "react"
import { Route, Routes } from "react-router-dom"
import { useAppSelector } from "../../../Store/hooks/redux"
import { Sections } from "../../../Store/models/EngineModels/IEngine"
import { CodeEditorSection } from "./code_editor/code_editor-section"
import { MainEditor } from "./main/main_editor"
import { Test } from "./test/test"

export const Editor: React.FC = () => {
    const active_section = useAppSelector(state => state.engineSlice.active_section)
    switch (active_section) {
        case Sections.MAIN:
            return <MainEditor />
        case Sections.CODE_EDITOR:
            return <CodeEditorSection />
        case Sections.TEST:
            return <Test />
        default:
            return <div>Erroe</div>
    }
}