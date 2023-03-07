import React from "react"
import { useAppSelector } from "../../Store/hooks/redux"
import { UserWithAuthMenu } from "../UserWithAuthMenu/user_menu"
import { UserWithoutAuthMenu } from "../UserWithoutAuthMenu/user_menu"
import style from "./user_menu.module.css"

interface UserMenuProps {
    action: () => void
    is_open: boolean
}

export const UserMenu: React.FC<UserMenuProps> = ({ action, is_open }) => {
    const user_auth = useAppSelector(state => state.userSlice.isAuthorized)
    return (
        <div className={style.container}>
            {user_auth ?
                <UserWithAuthMenu is_open={is_open} /> :
                <UserWithoutAuthMenu is_open={is_open} />}
        </div>
    )
}