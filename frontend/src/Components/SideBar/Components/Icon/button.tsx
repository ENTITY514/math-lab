import style from "./button.module.css"
import { useNavigate } from "react-router-dom"
import { Pages } from "../../../../Store/models/pages"

interface IButtonProps {
    url: string
    is_active?: boolean
    title: Pages
    action: (title: Pages) => void
}

export const Button: React.FC<IButtonProps> = ({ url, is_active, title, action }) => {
    const nav = useNavigate()

    const handlerClick = () => {
        action(title)
        nav("/" + title)
    }

    return (
        <div className={is_active ? style.active_container : style.container} onClick={handlerClick}>
            <div className={style.img} style={{ backgroundImage: "url(" + url + ")" }}></div>
        </div >
    )
}