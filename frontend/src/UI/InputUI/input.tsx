import React from "react"
import style from "./input.module.css"

interface IInputUIProps {
    placeHolder?: string
    type?: string
    width?: string
    height?: string
    padding?: string
    margin?: string
    background?:string
    onEnter?: (value: string) => void
    onChange?: (value: string) => void
}

export const InputUI: React.FC<IInputUIProps> = ({
    placeHolder = "Введите название",
    width = "100px",
    height = "30px",
    padding = "10px",
    margin = "10px",
    background,
    onEnter = () => { },
    onChange = () => { },
    type = "text",
}) => {
    const [value, setValue] = React.useState<string>("")
    const input_ref = React.useRef<HTMLInputElement>(null)

    const handlerChange = () => {
        if (input_ref.current !== null) {
            setValue(input_ref.current.value)
            onChange(input_ref.current.value)
        }
    }

    const hadlerKeyDown = (e: React.KeyboardEvent) => {
        if (e.code === "Enter") {
            onEnter(value)
            input_ref.current?.blur()
        }
    }

    return (
        <input
            ref={input_ref}
            className={style.input}
            value={value}
            onChange={handlerChange}
            onKeyDown={hadlerKeyDown}
            placeholder={placeHolder}
            type={type}
            style={{
                width,
                height,
                margin,
                padding,
                background
            }}
        />
    )
}