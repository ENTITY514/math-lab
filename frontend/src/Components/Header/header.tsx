import { Image } from "../Image/image"
import style from "./header.module.css"

export const Header: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.image}>
                <Image url="/CROSS-ENGINE-logo.png" />
            </div>
            <h2 className={style.name}>CROSS-ENGINE</h2>
        </div>
    )
}