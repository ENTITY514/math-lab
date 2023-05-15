import React from "react"
import style from "./user_tools.module.css"
import { Engine } from "../../../../../../../../Engine/core"

export const UserToolsView: React.FC = () => {
    const engine = new Engine()
    const [, set_update_count] = React.useState<boolean>(false)
    React.useEffect(() => {
        const interval = setInterval(() => set_update_count(prev => !prev), 100);
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div className={style.container}>

        </div>
    )
}