import React from "react"
import { useAppDispatch, useAppSelector } from "../../Store/hooks/redux"
import { Pages } from "../../Store/models/pages"
import { HUDSlice } from "../../Store/reducers/HUDSlice"
import { Button } from "./Components/Icon/button"
import style from "./sidebar.module.css"
import { Link } from "react-router-dom"
import { ImageUI } from "../../UI/Image/image"
import { nanoid } from "nanoid"

interface ISideBarProps {
    links: Array<
        {
            url: string
            icon: string
            name?: string
        }
    >
}

export const SideBar: React.FC<ISideBarProps> = ({ links }) => {
    return (
        <div className={style.container}>
            {links.map((link) => {
                return (
                    <div title={link.name} key={nanoid()}>
                        <Link to={link.url}>
                            <ImageUI url={link.icon} width="25px" height="25px" />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export { Pages }
