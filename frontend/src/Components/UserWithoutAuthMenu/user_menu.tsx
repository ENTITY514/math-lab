import React from "react"
import { useAppSelector } from "../../Store/hooks/redux"
import style from "./user_menu.module.css"

interface UserWithoutAuthMenuProps {
    is_link?: boolean
    is_open: boolean
}

export const UserWithoutAuthMenu: React.FC<UserWithoutAuthMenuProps> = ({ is_open }) => {
    const user_state = useAppSelector(state => state.userSlice)
    return (
        <div className={is_open ? style.container : style.container_}>
            <div className={style.action}>Войти</div>
            <div className={style.action}>Зарегистрироваться</div>
        </div>
    )
}