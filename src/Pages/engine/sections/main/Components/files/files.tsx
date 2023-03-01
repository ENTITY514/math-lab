import React from "react"
import { TextureFile } from "../../../../../../Engine/Classes/Objects/DataObjects/texture_file"
import { Engine } from "../../../../../../Engine/main"
import { Actions } from "./Components/actions/actions"
import style from "./files.module.css"

export const Files: React.FC = () => {
    const engine = new Engine()
    const files = engine.file_system.active_dir.childs
    const [, set_update_count] = React.useState<boolean>(false)
    React.useEffect(() => {
        const interval = setInterval(() => set_update_count(prev => !prev), 50);
        return () => {
            clearInterval(interval)
        }
    },[])

    const [isDragging, setIsDragging] = React.useState<boolean>(false)

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
            reader.readAsDataURL(file)
        }
        reader.onload = function () {
            engine.file_system.addFileToActiveDir(new TextureFile("texture", reader.result as string, engine.file_system.active_dir))
        };
    }

    const inputref = React.useRef<HTMLDivElement>(null)
    React.useEffect(() => {
        if (inputref.current !== null) {
            inputref.current.addEventListener('dragenter', handleDragIn)
            inputref.current.addEventListener('dragleave', handleDragOut)
            inputref.current.addEventListener('dragover', handleDrag)
            inputref.current.addEventListener('drop', handleDrop)
        }
    }, [])

    return (
        <div className={style.container} ref={inputref}>
            <Actions />
            <div className={style.files}>
                {
                    files.map(file => {
                        return file.__file_view__("little")
                    })
                }
            </div>
        </div>
    )
}