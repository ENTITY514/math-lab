import { Actions } from "./actions/actions";
import style from "./code_editor.module.css"
import { CodeEditor } from "./code_editor/code_editor";
import { Files } from "./files/files";
import { OpenFiles } from "./open_files/open_files";

export const CodeEditorSection: React.FC = () => {
    return (
        <div className={style.container}>
            <Actions />
            <div className={style.box1}>
                <Files />
                <div className={style.box2}>
                    <OpenFiles />
                    <CodeEditor />
                </div>
            </div>
        </div>
    )
}