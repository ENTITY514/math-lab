import style from "./icon.module.css"

interface IIconProps {
    url: string
}

export const Icon: React.FC<IIconProps> = ({ url }) => {
    return (
        <div className={style.container}>
            <div className={style.img} style={{ backgroundImage: "url(" + url + ")" }}></div>
        </div >
    )
}