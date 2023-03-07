import { Header } from "../../Components/Header/header"
import { SideBar } from "../../Components/SideBar/sidebar"
import { UserWithoutAuthMenu } from "../../Components/UserWithoutAuthMenu/user_menu"
import { CodeEditor } from "../engine/sections/code_editor/code_editor/code_editor"
import style from "./main.module.css"

export const Main: React.FC = () => {
    return (
        <div className={style.container}>
            <Header />
        </div>
    )
}