import React from "react"
import { TextComponent } from "./text_component"
import style from "./text_view.module.css"
import { InputUI } from "../../../../../UI/InputUI/input"

interface TextViewProps {
    component: TextComponent
}

export const TextView: React.FC<TextViewProps> = ({ component }) => {

    return (
        <div className={style.container}>
            <div className={style.name}>TextEditor</div>
            <InputUI title={component.object.text} onChange={(value) => component.object.updateText(value)} />
        </div>
    )
}