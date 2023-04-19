import React from "react"
import { CodeEditorSection } from "./code_editor/code_editor-section"
import { CompilePage } from "./compile_page/compile_page"
import { MainEditor } from "./main/main_editor"
import { Test } from "./test/test"
import { Route, Routes } from "react-router-dom"

export const Editor: React.FC = () => {
    return (
        <Routes>
            <Route path='/main' element={<MainEditor />} />
            <Route path='/code' element={<CodeEditorSection />} />
            <Route path='/test' element={<Test />} />
            <Route path='/compile/*' element={<CompilePage />} />
        </Routes>
    )
}