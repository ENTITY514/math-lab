import style from "./icon.module.css"

interface IIconProps {
    url: string
    is_active?: boolean
}

export const Icon: React.FC<IIconProps> = ({ url, is_active = false }) => {
    return (
        <div className={is_active ? style.active_container : style.container} >
            <div className={style.img} style={{ backgroundImage: "url(" + url + ")" }}></div>
        </div >
    )
}