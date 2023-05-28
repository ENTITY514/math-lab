import { useNavigate } from "react-router-dom"
import { Engine } from "../../../../../../Engine/core"
import { Title } from "../../../../../../UI/Title/title"
import style from "./open_from_file.module.css"
import React from "react"

export const OpenProjectFromFile: React.FC = () => {
    let nav = useNavigate()
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
            console.log(JSON.parse(reader.result as string));
            let engine = new Engine()
            engine.data_module.create_from_data_set(reader.result as string)
            nav("/dev/engine/main")
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
        <div ref={container} className={style.container} draggable>
            <Title title={"Загрузите файл проекта"} size={2} />
        </div>
    )
}