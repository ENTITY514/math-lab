import style from "./button.module.css"

interface IButtonProps {
    url: string
    is_active: boolean
    action: () => void
}

export const Button: React.FC<IButtonProps> = ({ url, is_active, action }) => {
    return (
        <div className={is_active ? style.active_container : style.container} onClick={() => { action() }}>
            <div className={style.img} style={{ backgroundImage: "url(" + url + ")" }}></div>
        </div >
    )
}