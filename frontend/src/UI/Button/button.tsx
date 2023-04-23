import style from "./button.module.css"

interface IButtonProps {
    text: string
    onClick: () => void
    color?: string
    margin?: string
    padding?: string
    fontWeight?: string
    fontSize?: number
    borderRadius?: number
    width?: string
    height?: string
    bgColor?: string
}

export const Button: React.FC<IButtonProps> = ({
    fontSize = 1,
    text,
    color = "inherit",
    margin = "10px",
    padding = "10px",
    fontWeight,
    onClick,
    borderRadius = "10px",
    width,
    height,
    bgColor = "#5a564c"
}) => {
    return (
        <div className={style.container} onClick={onClick}
            style={{
                fontSize: fontSize + "em",
                color,
                margin,
                padding,
                fontWeight,
                borderRadius,
                width,
                height,
                backgroundColor: bgColor,
                lineHeight: height
            }}>
            <div className={style.img}>{text}</div>
        </div >
    )
}