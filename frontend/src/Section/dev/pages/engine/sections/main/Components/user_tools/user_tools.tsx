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


    const [isDragging, setIsDragging] = React.useState(false)
    const handleDrag = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
    }
    const handleDragIn = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.dataTransfer !== null) {
            if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
                setIsDragging(true)
            }
        }
    }
    const handleDragOut = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragging(false)
    }
    const handleDrop = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        let file
        if (e.dataTransfer !== null) {
            file = e.dataTransfer.files[0]
        }
        let reader = new FileReader();
        if (file) {
            reader.readAsText(file)
        }
        reader.onload = function () {
            engine.user_tools_module.createToolFromJSON(reader.result as string)
        };
    }

    const container = React.useRef<HTMLDivElement>(null)
    React.useEffect(() => {
        if (container.current !== null) {
            container.current.addEventListener('dragenter', handleDragIn)
            container.current.addEventListener('dragleave', handleDragOut)
            container.current.addEventListener('dragover', handleDrag)
            container.current.addEventListener('drop', handleDrop)
        }
    }, [])

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
            <div className={style.footer} ref={container}>
                <div className={style.name}>Создать из файла</div>
            </div>
        </div>
    )
}