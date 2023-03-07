import { useAppSelector } from "../../Store/hooks/redux"
import style from "./user_menu.module.css"

interface UserWithAuthMenuProps {
    is_link?: boolean
    is_open: boolean
}

export const UserWithAuthMenu: React.FC<UserWithAuthMenuProps> = ({ is_open }) => {
    const user_state = useAppSelector(state => state.userSlice)
    return (
        <div className={is_open?style.container:style.container_}>
        </div>
    )
}