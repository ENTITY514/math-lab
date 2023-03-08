import React from "react"
import style from "./input.module.css"

interface IInputUIProps {
    placeHolder?: string
    type?: string
    onEnter?: (value: string) => void
    onChange?: (value: string) => void
}

export const InputUI: React.FC<IInputUIProps> = ({
    placeHolder = "Введите название",
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
        <div className={style.container} >
            <input
                ref={input_ref}
                className={style.input}
                value={value}
                onChange={handlerChange}
                onKeyDown={hadlerKeyDown}
                placeholder={placeHolder}
                type={type}
            />
        </div >
    )
}