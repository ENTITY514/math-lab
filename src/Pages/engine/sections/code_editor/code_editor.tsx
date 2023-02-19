import { Actions } from "./actions/actions";
import style from "./code_editor.module.css"
import { Editor } from "./editor/editor";
import { Files } from "./files/files";
import { OpenFiles } from "./open_files/open_files";

export const CodeEditor: React.FC = () => {
    return (
        <div className={style.container}>
            <Actions />
            <div className={style.box1}>
                <Files />
                <div className={style.box2}>
                    <OpenFiles />
                    <Editor />
                </div>
            </div>
        </div>
    )
}