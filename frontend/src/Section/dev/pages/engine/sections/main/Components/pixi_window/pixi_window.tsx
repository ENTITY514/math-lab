import React from "react"
import style from "./pixi_window.module.css"
import { Engine } from "../../../../../../../../Engine/core"
import { useAppSelector, useAppDispatch } from "../../../../../../../../Store/hooks/redux"
import { EngineSlice } from "../../../../../../../../Store/reducers/engineSlice"
import { TextureFile } from "../../../../../../../../Engine/Classes/Objects/DataObjects/texture_file"
import { ObjectTypes } from "../../../../../../../../Engine/Types/object_types"
import { GraphicsComponent } from "../../../../../../../../Engine/Classes/Objects/components/Graphic/graphic_component"

export const PixiWindow: React.FC = () => {
    const state = useAppSelector(state => state.engineSlice)
    const dispatch = useAppDispatch()
    const viewCreate = EngineSlice.actions.mainViewCreate
    const view_ref = React.useRef<HTMLDivElement>(null)
    const engine = new Engine()

    const handleDrag = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
    }
    const handleDragIn = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
    }
    const handleDragOut = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
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
            let texture = new TextureFile("texture", reader.result as string, engine.file_system.active_dir)
            engine.file_system.addFileToActiveDir(texture)
            let obj = engine.object_module.createObject(ObjectTypes.SPRITE)
            obj.components.forEach(component => {
                if (component instanceof GraphicsComponent) {
                    component.setTexture(texture)
                }
            });
        };
    }

    React.useEffect(() => {
        if (view_ref.current !== null) {
            view_ref.current.addEventListener('dragenter', handleDragIn)
            view_ref.current.addEventListener('dragleave', handleDragOut)
            view_ref.current.addEventListener('dragover', handleDrag)
            view_ref.current.addEventListener('drop', handleDrop)
        }
    }, [])

    React.useEffect(() => {
        if (view_ref.current && !state.view_ready.main) {
            engine.addView(view_ref.current)
            dispatch(viewCreate)
        }
    }, [])
    return (
        <div ref={view_ref} className={style.container}>
        </div>
    )
}