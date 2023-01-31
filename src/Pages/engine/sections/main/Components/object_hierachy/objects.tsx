import React from "react"
import { Engine } from "../../../../engine/main"
import { Object } from "./Components/Object/object"
import style from "./objects.module.css"

export const Objects: React.FC = () => {
    const engine = new Engine()
    const objects = engine.object_module.objects
    const [update_count, set_update_count] = React.useState<number>(0)
    React.useEffect(() => {
        setInterval(() => set_update_count(update_count+1), 100);
    })
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