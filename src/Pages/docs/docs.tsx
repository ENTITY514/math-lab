import { Header } from "../../Components/Header/header"
import { SideBar } from "../../Components/SideBar/sidebar"
import style from "./docs.module.css"

export const Docs: React.FC = () => {
    return (
        <div className={style.container}>
            <Header />
            <SideBar />
        </div>
    )
}