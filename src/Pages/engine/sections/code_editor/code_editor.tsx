import { Editor } from "../editor"
import style from "./code_editor.module.css"

export const CodeEditor: React.FC = () => {
    return (
        <div className={style.container}>
            <Editor />
        </div>
    )
}