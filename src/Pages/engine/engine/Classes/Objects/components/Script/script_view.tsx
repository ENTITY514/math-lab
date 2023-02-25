import React from "react"
import { Engine } from "../../../../main"
import { ScriptComponent } from "./script_component"
import style from "./script_view.module.css"
import { ScriptFile } from "../../DataObjects/script_file"

interface ScriptViewProps {
    component: ScriptComponent
}

export const ScriptView: React.FC<ScriptViewProps> = ({ component }) => {
    const engine = new Engine()

    const [isDragging, setIsDragging] = React.useState<boolean>(false)
    const handleDrag = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const handleDragIn = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.dataTransfer?.items && e.dataTransfer?.items.length > 0) {
            setIsDragging(true)
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
        if (e.dataTransfer?.getData('id')) {
            const script = engine.file_system.active_dir.findFileByID(e.dataTransfer.getData('id'))
            if (script !== null) {
                component.addScript(script as ScriptFile)
            }
        }
    }

    const handleClick = (e: Event) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const script_inp_ref = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (script_inp_ref.current != null) {
            script_inp_ref.current.addEventListener('dragenter', handleDragIn)
            script_inp_ref.current.addEventListener('dragleave', handleDragOut)
            script_inp_ref.current.addEventListener('dragover', handleDrag)
            script_inp_ref.current.addEventListener('drop', handleDrop)
            script_inp_ref.current.addEventListener('input', handleClick)
        }
    }, [])

    return (
        <div className={style.container} ref={script_inp_ref}>
            <div className={style.name}>Scripts</div>
            {
                component.scripts.map(script => {
                    return (
                        script.__file_view__("linear")
                    )
                })
            }
        </div>
    )
}