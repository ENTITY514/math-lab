import { ImageUI } from "../../../../UI/Image/image"
import { Assets } from "../../../../assets/get"
import style from "./style.module.css"
import { Tool } from "./tool"

interface IToolView {
    tool: Tool
}

export const ToolView: React.FC<IToolView> = ({ tool }) => {

    return (
        <div className={style.container}>

            <div className={style.header}>
                <div className={style.name}>{tool.name}</div>
                <div className={style.button} onClick={() => { tool.reload() }}>
                    <ImageUI url={Assets.load_arrow} width="20px" height="20px" />
                </div>
                <div className={style.button} onClick={() => { if (tool.is_active) { tool.turnOff() } else { tool.turnOn() } }}>
                    <div className={tool.is_active ? style.circle_on : style.circle_off}></div>
                </div>
            </div>

            <div className={style.inputs}>
                {
                    tool.input_system.__get_input_react_view__()
                }
            </div>

            <div className={style.footer}>

            </div>

        </div >
    )
}