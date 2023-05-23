import React from "react"
import style from "./console.module.css"
import { Engine } from "../../../../../../../Engine/core"
import { Title } from "../../../../../../../UI/Title/title"
import { Text } from "../../../../../../../UI/Text/text"

export const Console: React.FC = () => {
    const engine = new Engine()
    const [, set_update_count] = React.useState<boolean>(false)
    React.useEffect(() => {
        const interval = setInterval(() => set_update_count(prev => !prev), 500);
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div className={style.container}>
            <Title title={"Консоль"} />
            <Text >
                {engine.script_module.console_value}
            </Text>
        </div>
    )
}