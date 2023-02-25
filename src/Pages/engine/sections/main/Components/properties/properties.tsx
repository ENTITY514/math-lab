import React from "react"
import { Engine } from "../../../../engine/main"
import style from "./properties.module.css"

export const Properties: React.FC = () => {
    const engine = new Engine()
    const [, set_update_count] = React.useState<boolean>(false)
    React.useEffect(() => {
        const interval = setInterval(() => set_update_count(prev => !prev), 50);
        return () => {
            clearInterval(interval)
        }
    },[])
    return (
        <div className={style.container}>
            {engine.object_module.active_object?.components.map((component) => {
                return (
                    component.__react_view__()
                )
            })}
        </div>
    )
}