import { useAppSelector } from "../../Store/hooks/redux"
import { ImageUI } from "../../UI/Image/image"
import style from "./user_icon.module.css"

interface UserIconProps {
    is_link?: boolean
}

export const UserIcon: React.FC<UserIconProps> = ({ is_link = false }) => {
    const user_icon = useAppSelector(state => state.userSlice.user_icon)
    return (
        <div className={style.container}>
            <ImageUI url={user_icon} />
        </div>
    )
}