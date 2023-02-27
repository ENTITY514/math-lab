import React from "react"
import style from "./input_with_name.module.css"

interface IInputWithNameProps {
    title: string
    placeHolder?: string
    onEnter: (value: string) => void
}

export const InputWithName: React.FC<IInputWithNameProps> = ({ title, onEnter, placeHolder = "Введите название" }) => {
    const [value, setValue] = React.useState<string>(title)
    const input_ref = React.useRef<HTMLInputElement>(null)

    const handlerChange = () => {
        if (input_ref.current !== null) {
            setValue(input_ref.current.value)
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
            />
        </div >
    )
}