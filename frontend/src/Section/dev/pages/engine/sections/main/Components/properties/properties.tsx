import React from "react"
import style from "./properties.module.css"
import { Engine } from "../../../../../../../../Engine/core"
import { InputUI } from "../../../../../../../../UI/InputUI/input"

export const Properties: React.FC = () => {
    const engine = new Engine()
    const [, set_update_count] = React.useState<boolean>(false)
    React.useEffect(() => {
        const interval = setInterval(() => set_update_count(prev => !prev), 50);
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div className={style.container}>
            {
                engine.draw_module ?
                    <div className={style.box}>
                        <div className={style.name}>Размер кисти:</div>
                        <InputUI
                            type="number"
                            title={engine.draw_module.size}
                            onChange={(value) => { engine.draw_module.size = Number(value) }}
                            width="80%"
                            height="10px"
                            margin="1px" />
                    </div> : null
            }
            {engine.object_module.active_object ? <div className={style.box}>
                <div className={style.name} onClick={() => {
                    engine.object_module.deleteObject(engine.object_module.active_object)
                    engine.tool_module.update_tool_state(false)
                }}>Удалить</div>
                <div className={style.name}>Имя объекта:</div>
                <InputUI
                    placeHolder="Введите имя объекта..."
                    title={engine.object_module.active_object?.name}
                    onChange={(value) => { if (engine.object_module.active_object) { engine.object_module.active_object.name = value } }}
                    width="80%"
                    height="10px"
                    margin="1px" />
                <div className={style.name}>Тег:</div>
                <InputUI
                    placeHolder="Введите тег объекта..."
                    title={engine.object_module.active_object?.tag}
                    onChange={(value) => { if (engine.object_module.active_object) { engine.object_module.active_object.tag = value } }}
                    width="80%"
                    height="10px"
                    margin="1px" />
            </div> : null}
            {engine.object_module.active_object?.components.map((component) => {
                return (
                    component.__react_view__()
                )
            })}
        </div>
    )
}