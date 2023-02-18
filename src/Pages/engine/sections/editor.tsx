import React from "react"
import { Route, Routes } from "react-router-dom"
import { useAppSelector } from "../../../Store/hooks/redux"
import { Sections } from "../../../Store/models/EngineModels/IEngine"
import { CodeEditor } from "./code_editor/code_editor"
import { MainEditor } from "./main/main_editor"

export const Editor: React.FC = () => {
    return (
        <Routes>
            <Route path='main/*' element={<MainEditor />} />
            <Route path='code/*' element={<CodeEditor />} />
            <Route path='test/*' element={<div>Test</div>} />
        </Routes>
    )
}