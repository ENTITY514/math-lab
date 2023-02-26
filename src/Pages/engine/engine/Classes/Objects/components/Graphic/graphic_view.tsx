import React from "react"
import { Engine } from "../../../../main"
import { TextureFile } from "../../DataObjects/texture_file"
import { Sprite } from "../../ViewObjects/sprite"
import { GraphicsComponent } from "./graphic_component"
import style from "./graphic_view.module.css"

interface GraphicViewProps {
    component: GraphicsComponent
}

export const GraphicView: React.FC<GraphicViewProps> = ({ component }) => {
    const engine = new Engine()
    const alpha_inp_ref = React.useRef<HTMLInputElement>(null)
    const tint_inp_ref = React.useRef<HTMLInputElement>(null)
    const getTintToHex = React.useMemo(() => { return "#" + component.getTint().toString(16) }, [component.object.sprite.tint])

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
            const texture = engine.file_system.active_dir.findFileByID(e.dataTransfer.getData('id'))
            if (texture !== null) {
                component.setTexture(texture as TextureFile)
            }
        }
    }

    const handleClick = (e: Event) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const texture_inp_ref = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (texture_inp_ref.current != null) {
            texture_inp_ref.current.addEventListener('dragenter', handleDragIn)
            texture_inp_ref.current.addEventListener('dragleave', handleDragOut)
            texture_inp_ref.current.addEventListener('dragover', handleDrag)
            texture_inp_ref.current.addEventListener('drop', handleDrop)
            texture_inp_ref.current.addEventListener('input', handleClick)
        }
    }, [])

    return (
        <div className={style.container}>
            <div className={style.name}>Graphics</div>
            <div className={style.textureName} ref={texture_inp_ref}>Texture file: {component.getTextureFile() ? component.getTextureFile()?.name : "None File"}</div>
            <div className={style.tint}>Tint: {getTintToHex}</div><input
                ref={tint_inp_ref}
                value={getTintToHex}
                type="color"
                onChange={() => {
                    component.changeTint(Number("0x" + tint_inp_ref.current?.value.slice(1)))
                }}
            />
            <div className={style.opacity}>Alpha: {component.getOpacity()}</div>
            <input
                ref={alpha_inp_ref}
                type="range"
                value={component.getOpacity() * 100}
                max={100} min={0}
                onChange={() => { component.changeOpacity(Number(alpha_inp_ref.current?.value) / 100) }}
            />
        </div>
    )
}