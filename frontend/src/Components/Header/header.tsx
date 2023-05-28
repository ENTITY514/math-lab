import { useAppSelector } from "../../Store/hooks/redux"
import { UserIcon } from "../UserIcon/user_icon"
import style from "./header.module.css"

export const Header: React.FC = () => {
    const user_name = useAppSelector(state => state.userSlice.user_name)
    return (
        <div className={style.container}>
            <h2 className={style.name}>MATH-LAB</h2>
            <div className={style.user_data}>
                {user_name}
                <UserIcon />
            </div>

        </div>
    )
}