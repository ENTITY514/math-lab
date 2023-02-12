import React from "react";
import style from "./views.module.css"

interface IFileViewProps {
    size: string
    url: string
    title: string
}

export const FileView: React.FC<IFileViewProps> = ({ size, url, title }) => {
    if (size === "little") {
        return (
            <div className={style.container_little}>
                <div className={style.image} style={{ backgroundImage: "url(" + url + ")" }}></div>
            </div>
        )
    }
    else if (size === "big") {
        return (
            <div className={style.container_big}>
                <div className={style.big_image_wrapper}>
                    <div className={style.image} style={{ backgroundImage: "url(" + url + ")" }}></div>
                </div>
                <div className={style.name}>{title}</div>
            </div>
        )
    }
    else {
        return (
            <div className={style.container_medium}>
                <div className={style.medium_image_wrapper}>
                    <div className={style.image} style={{ backgroundImage: "url(" + url + ")" }}></div>
                </div>
                <div className={style.name}>{title}</div>
            </div>
        )
    }
}