import style from "./text.module.css"

interface ITextProps {
    size?: number
    children: string
    color?: string
    margin?: string
    padding?: string
    fontWeight?: string
}

export const Text: React.FC<ITextProps> = ({
    size = 1,
    children,
    color = "inherit",
    margin = "10px",
    padding,
    fontWeight
}) => {
    return (
        <div className={style.container} style={{ fontSize: size + "em", color, margin, padding, fontWeight }}>
            {children}
        </div>
    )
}