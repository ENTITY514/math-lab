import React from "react"
import style from "./user_tools.module.css"
import { Engine } from "../../../../../../../../Engine/core"
import { ScriptFileDev } from "../../../../../../../../Engine/Classes/Objects/DataObjects/script_dev"

export const UserToolsView: React.FC = () => {
    const engine = new Engine()
    const [, set_update_count] = React.useState<boolean>(false)
    React.useEffect(() => {
        const interval = setInterval(() => set_update_count(prev => !prev), 300);
        return () => {
            clearInterval(interval)
        }
    }, [])

    const createTool = () => {
        engine.user_tools_module.createTool()
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.name}>Пользовательские инструменты</div>
                <div className={style.add} onClick={createTool}>+</div>
            </div>
            {
                engine.user_tools_module.tools.map(tool => {
                    return <div key={tool.id}>{tool.__react__view__()}</div>
                })
            }
        </div>
    )
}