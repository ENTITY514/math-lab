import { SectionsChoice } from "./Components/sections/sections"
import style from "./engine.module.css"
import { Editor } from "./sections/editor"

export const EnginePage: React.FC = () => {
    return (
        <div className={style.container}>
            <SectionsChoice />
            <Editor />
        </div>
    )
}