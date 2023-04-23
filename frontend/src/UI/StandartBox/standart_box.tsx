import style from "./standart_box.module.css"

interface IStandartBoxProps {
    children: string | JSX.Element | React.ReactNode
    margin?: string
    padding?: string
    width?: string
    height?: string
    borderRadius?: string
    backgroundColor?: string

}

export const StandartBox: React.FC<IStandartBoxProps> = ({
    children,
    margin = "10px",
    padding = "5px",
    width = "auto",
    height = "auto",
    borderRadius = "10px",
    backgroundColor = "inherit"
}) => {
    return (
        <div className={style.container} style={{ margin, padding, width, height, borderRadius, backgroundColor }}>
            {children}
        </div>
    )
}