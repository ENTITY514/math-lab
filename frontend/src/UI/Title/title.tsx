import style from "./title.module.css"

interface ITitleProps {
    size?: number
    title: string
    color?: string
    margin?: string
    padding?: string
    fontWeight?: string
}

export const Title: React.FC<ITitleProps> = ({
    size = 1,
    title,
    color = "inherit",
    margin = "10px",
    padding,
    fontWeight
}) => {
    return (
        <div className={style.container} style={{ fontSize: size + "em", color, margin, padding, fontWeight }}>
            {title}
        </div>
    )
}