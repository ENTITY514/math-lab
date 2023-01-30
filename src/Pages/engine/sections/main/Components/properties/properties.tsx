import { Engine } from "../../../../engine/main"
import style from "./properties.module.css"

export const Properties: React.FC = () => {
    const engine = new Engine()
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