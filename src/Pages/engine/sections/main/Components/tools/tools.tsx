import { Engine } from "../../../../engine/main"
import style from "./tools.module.css"

export const Tools: React.FC = () => {
    const enigne = new Engine()
    return (
        <div className={style.container}>
            <div className={style.button} onClick={()=>{enigne.object_module.createObject()}}></div>
        </div>
    )
}