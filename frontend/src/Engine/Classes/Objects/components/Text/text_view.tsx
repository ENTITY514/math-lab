import React from "react"
import { TextComponent } from "./text_component"
import style from "./text_view.module.css"
import { InputUI } from "../../../../../UI/InputUI/input"
import { DropDownMenu } from "../../../../../UI/DropDownMenu/drop-down-menu"
import PIXI from "pixi.js"


let fonts = [
    { font_name: "Arial" },
    { font_name: "Arial Black" },
    { font_name: "Comic Sans MS" },
    { font_name: "Courier New" },
    { font_name: "Georgia" },
    { font_name: "Helvetica" },
    { font_name: "Impact" },
    { font_name: "Tahoma" },
    { font_name: "Times New Roman" },
    { font_name: "Verdana" },
    { font_name: "Georgia, serif" },
]

let font_styles = [
    { font_style: "normal" },
    { font_style: "italic" },
    { font_style: "oblique" },
]

let font_caps = [
    { font_cap: "normal" },
    { font_cap: "small-caps" },
]

let font_bolds = [
    { font_cap: "normal" },
    { font_cap: "bold" },
    { font_cap: "bolder" },
    { font_cap: "lighter" }
]

interface TextViewProps {
    component: TextComponent
}

export const TextView: React.FC<TextViewProps> = ({ component }) => {
    const fonts_ref = React.useRef<HTMLSelectElement>(null)
    const fonts_styles_ref = React.useRef<HTMLSelectElement>(null)
    const fonts_caps_ref = React.useRef<HTMLSelectElement>(null)
    const fonts_bolds_ref = React.useRef<HTMLSelectElement>(null)
    const fonts_color_ref = React.useRef<HTMLInputElement>(null)
    const fonts_size_ref = React.useRef<HTMLInputElement>(null)
    const fonts_wordWrapWidth_ref = React.useRef<HTMLInputElement>(null)
    React.useEffect(() => {
        if (fonts_ref.current !== null) {
            fonts_ref.current.addEventListener('change', () => {
                if (fonts_ref.current !== null) {
                    component.object.style.fontFamily = fonts_ref.current.value
                }
            })
        }
        if (fonts_styles_ref.current !== null) {
            fonts_styles_ref.current.addEventListener('change', () => {
                if (fonts_styles_ref.current !== null) {
                    //@ts-ignore
                    component.object.style.fontStyle = fonts_styles_ref.current.value
                }
            })
        }
        if (fonts_caps_ref.current !== null) {
            fonts_caps_ref.current.addEventListener('change', () => {
                if (fonts_caps_ref.current !== null) {
                    //@ts-ignore
                    component.object.style.fontVariant = fonts_caps_ref.current.value
                }
            })
        }
        if (fonts_bolds_ref.current !== null) {
            fonts_bolds_ref.current.addEventListener('change', () => {
                if (fonts_bolds_ref.current !== null) {
                    //@ts-ignore
                    component.object.style.fontWeight = fonts_bolds_ref.current.value
                }
            })
        }
    }, [])

    const getColorToHex = React.useMemo(() => { return String(component.object.style.fill) }, [component.object.display_object.tint])

    return (
        <div className={style.container}>
            <div className={style.name}>TextEditor</div>
            <InputUI title={component.object.text} onChange={(value) => component.object.updateText(value)} />
            <select className={style.select} ref={fonts_ref}>
                {
                    fonts.map(font => {
                        return <option className={style.option} value={font.font_name}>{font.font_name}</option>
                    })
                }
            </select>

            <select className={style.select} ref={fonts_styles_ref}>
                {
                    font_styles.map(font => {
                        return <option className={style.option} value={font.font_style}>{font.font_style}</option>
                    })
                }
            </select>

            <select className={style.select} ref={fonts_caps_ref}>
                {
                    font_caps.map(font => {
                        return <option className={style.option} value={font.font_cap}>{font.font_cap}</option>
                    })
                }
            </select>

            <select className={style.select} ref={fonts_bolds_ref}>
                {
                    font_bolds.map(font => {
                        return <option className={style.option} value={font.font_cap}>{font.font_cap}</option>
                    })
                }
            </select>
            <div className={style.tint}>Color: {getColorToHex}</div><input
                ref={fonts_color_ref}
                value={String(component.object.style.fill)}
                type="color"
                onChange={() => {
                    component.object.style.fill = (Number("0x" + fonts_color_ref.current?.value.slice(1)))
                }}
            />

            <div className={style.opacity}>FontSize: {component.object.style.fontSize}</div>
            <input
                ref={fonts_size_ref}
                type="range"
                value={component.object.style.fontSize}
                max={200} min={1}
                onChange={() => { component.object.style.fontSize = (Number(fonts_size_ref.current?.value)) }}
            />

            <div className={style.opacity}>WordWrapWidth: {component.object.style.wordWrapWidth}</div>
            <input
                ref={fonts_wordWrapWidth_ref}
                type="number"
                value={component.object.style.wordWrapWidth}
                onChange={() => { component.object.style.wordWrapWidth = (Number(fonts_wordWrapWidth_ref.current?.value)) }}
            />
        </div>
    )
}