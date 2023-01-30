import React from "react"
import { Engine } from "../../../../engine/main"
import { Object } from "./Components/Object/object"
import style from "./objects.module.css"

export const Objects: React.FC = () => {
    const engine = new Engine()
    const objects = engine.object_module.objects
    return (
        <div className={style.container}>
            {
                objects.map((object) => {
                    return (
                        <Object object={object} key={object.id} />
                    )
                })
            }
        </div>
    )
}