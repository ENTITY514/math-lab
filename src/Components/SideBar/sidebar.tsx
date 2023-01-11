import React from "react"
import { Icon } from "../Icon/icon"
import style from "./sidebar.module.css"

export const SideBar: React.FC = () => {
    const [is_open, set_is_open] = React.useState<Boolean>(false)
    if (is_open) {
        return (
            <div className={style.container_one}>
                <div onClick={() => { set_is_open(false) }}>
                    <Icon url={"icons/menu.png"} />
                </div>
                <div className={style.title}>Закрыть меню</div>
                <Icon url={"icons/news.png"} />
                <div className={style.title}>Статьи</div>
                <Icon url={"icons/presentation.png"} />
                <div className={style.title}>Работы</div>
                <Icon url={"icons/google-docs.png"} />
                <div className={style.title}>Документация</div>
            </div>
        )
    }
    else {
        return (
            <div className={style.container_two}>
                <div onClick={() => { set_is_open(true) }}>
                    <Icon url={"icons/menu.png"} />
                </div>
                <Icon url={"icons/news.png"} />
                <Icon url={"icons/presentation.png"} />
                <Icon url={"icons/google-docs.png"} />
            </div>
        )
    }
}