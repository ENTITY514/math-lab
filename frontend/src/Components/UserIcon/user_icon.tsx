import React from "react"
import { useAppSelector } from "../../Store/hooks/redux"
import { ImageUI } from "../../UI/Image/image"
import { UserMenu } from "../UserMenu/user_menu"
import style from "./user_icon.module.css"

interface UserIconProps {
    is_link?: boolean
}

export const UserIcon: React.FC<UserIconProps> = ({ is_link = false }) => {
    const user_icon = useAppSelector(state => state.userSlice.user_icon)
    const [is_open, set_is_open] = React.useState<boolean>(false)
    if (is_link) {
        return (
            <div className={style.container}>
                <ImageUI url={user_icon} />
            </div>
        )
    }
    else {
        return (
            <div className={style.container} onClick={() => { set_is_open(prev => !prev) }}>
                <ImageUI url={user_icon} />
                {is_open ? <div className={style.bg}></div> : null}
                <UserMenu action={() => { set_is_open(prev => !prev) }} is_open={is_open} />
            </div>
        )
    }
}