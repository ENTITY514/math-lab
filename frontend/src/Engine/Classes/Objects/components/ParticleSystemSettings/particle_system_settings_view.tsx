import React from "react"
import { Engine } from "../../../../core"
import style from "./particle_system_settings.module.css"
import { ParticleSystemSettingsComponent } from "./particle_system_settings"
import { InputWithName } from "../../../../../UI/NameWithInput/input_with_name"
import { Text } from "../../../../../UI/Text/text"
import { InputUI } from "../../../../../UI/InputUI/input"

interface ParticleSystemSettingsViewProps {
    component: ParticleSystemSettingsComponent
}

export const ParticleSystemSettingsView: React.FC<ParticleSystemSettingsViewProps> = ({ component }) => {
    const engine = new Engine()
    const alpha_inp_ref = React.useRef<HTMLInputElement>(null)

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

    const ChangeHandler = () => {
        component.object.updateSystem()
    }

    return (
        <div className={style.container}>
            <div className={style.name}>ParticleSystem Settings</div>
            <div className={style.box}>
                <Text>Max speed:</Text><InputUI title={component.object.max_speed.toString()} type="number" onChange={(value) => { component.object.max_speed = Number(value); ChangeHandler() }} />
                <Text>Min speed:</Text><InputUI title={component.object.min_speed.toString()} type="number" onChange={(value) => { component.object.min_speed = Number(value); ChangeHandler() }} />
                <Text>Max size:</Text><InputUI title={component.object.max_size.toString()} type="number" onChange={(value) => { component.object.max_size = Number(value); ChangeHandler() }} />
                <Text>Min size:</Text><InputUI title={component.object.max_size.toString()} type="number" onChange={(value) => { component.object.min_size = Number(value); ChangeHandler() }} />
            </div>
        </div>
    )
}