import React from "react"
import style from "./json_compilation.module.css"
import { Engine } from "../../../../../../../../Engine/core"
import { Text } from "../../../../../../../../UI/Text/text"
import { Button } from "../../../../../../../../UI/Button/button"

export const JSONCompilation: React.FC = () => {
    const engine = React.useRef(new Engine())
    const json = React.useMemo(() => { return engine.current.data_module.create_data_set() }, [])
    const file = new Blob([json], { type: 'application/json' });
    const ref = URL.createObjectURL(file)
    return (
        <div className={style.container}>
            <div className={style.box}>
                <Text>
                    {json}
                </Text>
            </div>
            <a href={ref} download={"file.json"}>
                <Button text={"Скачать"} onClick={() => { }} />
            </a>
        </div>
    )
}