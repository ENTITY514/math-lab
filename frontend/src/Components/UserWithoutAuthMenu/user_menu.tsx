import React from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../Store/hooks/redux"
import { userSlice } from "../../Store/reducers/UserSlice"
import { Icon } from "../../UI/Icon/icon"
import { LittleIcon } from "../../UI/little_icon/little_icon"
import style from "./user_menu.module.css"

interface UserWithoutAuthMenuProps {
    is_link?: boolean
    is_open: boolean
}

export const UserWithoutAuthMenu: React.FC<UserWithoutAuthMenuProps> = ({ is_open }) => {
    const user_state = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()
    const actions = userSlice.actions
    return (
        <div className={is_open ? style.container : style.container_}>
            <Link to={"/auth"} className={style.action} onClick={() => { dispatch(actions.setIsLogPage(true)) }}>Войти</Link> <LittleIcon url="/login.png" />
            <Link to={"/auth"} className={style.action} onClick={() => { dispatch(actions.setIsLogPage(false)) }}>Зарегистрироваться</Link> <LittleIcon url="/register.png" />
        </div>
    )
}