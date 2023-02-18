import style from "./code_editor.module.css"
import { Editor } from "./Editor/editor";

export const CodeEditor: React.FC = () => {
    console.log("text editor");
    
    return (
        <div className={style.container}>
            <Editor />
        </div>
    )
}