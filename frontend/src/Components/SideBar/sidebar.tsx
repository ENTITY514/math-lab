import React from "react"
import { useAppDispatch, useAppSelector } from "../../Store/hooks/redux"
import { Pages } from "../../Store/models/pages"
import { HUDSlice } from "../../Store/reducers/HUDSlice"
import { Icon } from "../Icon/icon"
import { Button } from "./Components/Icon/button"
import { icons } from "./icons/get"
import style from "./sidebar.module.css"

export const SideBar: React.FC = () => {
    const state = useAppSelector(state => state.HUDSlice)
    const dispatch = useAppDispatch()
    const { changePageTo, open_hud } = HUDSlice.actions
    const [active_page, set_active_page] = React.useState<Pages>(state.active_page)
    const changePage = (title: Pages) => {
        set_active_page(title)
        dispatch(changePageTo(title))
    }
    console.log(active_page);
    
    if (state.is_open) {
        return (
            <div className={style.container_one}>
                <div onClick={() => { dispatch(open_hud(false)) }}>
                    <Icon url={icons.menu} />
                </div>
                <div className={style.title}>Закрыть меню</div>
                <Button url={icons.news} is_active={active_page === Pages.ARTICLES} title={Pages.ARTICLES} action={changePage} />
                <div className={style.title}>Статьи</div>
                <Button url={icons.presentation} is_active={active_page === Pages.WORKVIEW} title={Pages.WORKVIEW} action={changePage} />
                <div className={style.title}>Работы</div>
                <Button url={icons.google_docs} is_active={active_page === Pages.DOCS} title={Pages.DOCS} action={changePage} />
                <div className={style.title}>Документация</div>
                <Button url={icons.technology} is_active={active_page === Pages.ENGINE} title={Pages.ENGINE} action={changePage} />
                <div className={style.title}>Создать проект</div>
                <Button url={icons.info} is_active={active_page === Pages.ABOUT} title={Pages.ABOUT} action={changePage} />
                <div className={style.title}>О проекте</div>
                <Button url={icons.gears} is_active={active_page === Pages.SETTINGS} title={Pages.SETTINGS} action={changePage} />
                <div className={style.title}>Настройки</div>
            </div>
        )
    }
    else {
        return (
            <div className={style.container_two}>
                <div onClick={() => { dispatch(open_hud(true)) }}>
                    <Icon url={"icons/menu.png"} />
                </div>
                <Button url={"icons/news.png"} is_active={active_page === Pages.ARTICLES} title={Pages.ARTICLES} action={changePage} />
                <Button url={"icons/presentation.png"} is_active={active_page === Pages.WORKVIEW} title={Pages.WORKVIEW} action={changePage} />
                <Button url={"icons/google-docs.png"} is_active={active_page === Pages.DOCS} title={Pages.DOCS} action={changePage} />
                <Button url={"icons/technology.png"} is_active={active_page === Pages.ENGINE} title={Pages.ENGINE} action={changePage} />
                <Button url={"icons/info.png"} is_active={active_page === Pages.ABOUT} title={Pages.ABOUT} action={changePage} />
                <Button url={"icons/gears.png"} is_active={active_page === Pages.SETTINGS} title={Pages.SETTINGS} action={changePage} />
            </div>
        )
    }
}

export { Pages }
