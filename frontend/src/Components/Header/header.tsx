import { useAppSelector } from "../../Store/hooks/redux"
import { ImageUI } from "../../UI/Image/image"
import { UserIcon } from "../UserIcon/user_icon"
import style from "./header.module.css"

export const Header: React.FC = () => {
    const user_name = useAppSelector(state => state.userSlice.user_name)
    return (
        <div className={style.container}>
            <div className={style.image}>
                <ImageUI url="/CROSS-ENGINE-logo.png" />
            </div>
            <h2 className={style.name}>CROSS-ENGINE</h2>
            <div className={style.user_data}>
                {user_name}
                <UserIcon />
            </div>

        </div>
    )
}