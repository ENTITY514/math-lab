import React from "react"
import { Engine } from "../../../../engine/main"
import style from "./properties.module.css"

export const Properties: React.FC = () => {
    const engine = new Engine()
    const [update_count, set_update_count] = React.useState<number>(0)
    React.useEffect(() => {
        setInterval(() => set_update_count(update_count+1), 50);
    })
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