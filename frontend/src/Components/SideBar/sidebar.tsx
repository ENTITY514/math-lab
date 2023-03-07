import React from "react"
import { useAppDispatch, useAppSelector } from "../../Store/hooks/redux"
import { Pages } from "../../Store/models/pages"
import { HUDSlice } from "../../Store/reducers/HUDSlice"
import { Button } from "./Components/Icon/button"
import style from "./sidebar.module.css"

export const SideBar: React.FC = () => {
    const state = useAppSelector(state => state.HUDSlice)
    const dispatch = useAppDispatch()
    const { changePageTo, } = HUDSlice.actions
    const [active_page, set_active_page] = React.useState<Pages>(state.active_page)
    const changePage = (title: Pages) => {
        set_active_page(title)
        dispatch(changePageTo(title))
    }
    return (
        <div className={style.container}>
            <Button url={"icons/news.png"} is_active={active_page === Pages.ARTICLES} title={Pages.ARTICLES} action={changePage} />
            <Button url={"icons/presentation.png"} is_active={active_page === Pages.WORKVIEW} title={Pages.WORKVIEW} action={changePage} />
            <Button url={"icons/google-docs.png"} is_active={active_page === Pages.DOCS} title={Pages.DOCS} action={changePage} />
            <Button url={"icons/technology.png"} is_active={active_page === Pages.ENGINE} title={Pages.ENGINE} action={changePage} />
            <Button url={"icons/info.png"} is_active={active_page === Pages.ABOUT} title={Pages.ABOUT} action={changePage} />
            <Button url={"icons/gears.png"} is_active={active_page === Pages.SETTINGS} title={Pages.SETTINGS} action={changePage} />
        </div>
    )
}

export { Pages }
