import React from "react"
import { Route, Routes } from "react-router-dom"
import { CodeEditorSection } from "./code_editor/code_editor-section"
import { MainEditor } from "./main/main_editor"

export const Editor: React.FC = () => {
    return (
        <Routes>
            <Route path='main/*' element={<MainEditor />} />
            <Route path='code/*' element={<CodeEditorSection />} />
            <Route path='test/*' element={<div>Test</div>} />
        </Routes>
    )
}