import React from "react"
import { Engine } from "../../../../../../Engine/main"
import { Object } from "./Components/Object/object"
import style from "./objects.module.css"

export const Objects: React.FC = () => {
    const engine = new Engine()
    const objects = engine.object_module.objects
    const [, set_update_count] = React.useState<boolean>(false)
    React.useEffect(() => {
        const interval = setInterval(() => set_update_count(prev => !prev), 100);
        return () => {
            clearInterval(interval)
        }
    },[])
    return (
        <div className={style.container}>
            {
                objects.map((object, index) => {
                    return (
                        <Object object={object} index={index} key={object.id} />
                    )
                })
            }
        </div>
    )
}