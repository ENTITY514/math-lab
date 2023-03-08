import React from "react"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../Store/hooks/redux"
import { Icon } from "../../UI/Icon/icon"
import { LittleIcon } from "../../UI/little_icon/little_icon"
import style from "./user_menu.module.css"

interface UserWithoutAuthMenuProps {
    is_link?: boolean
    is_open: boolean
}

export const UserWithoutAuthMenu: React.FC<UserWithoutAuthMenuProps> = ({ is_open }) => {
    const user_state = useAppSelector(state => state.userSlice)
    return (
        <div className={is_open ? style.container : style.container_}>
            <Link to={"auth"} className={style.action}>Войти</Link> <LittleIcon url="/login.png" />
            <div className={style.action}>Зарегистрироваться</div> <LittleIcon url="/register.png" />
        </div>
    )
}