import { Routes, Route } from 'react-router-dom';
import { SideBar } from '../../Components/SideBar/sidebar';
import style from "./style.module.css"
import { Articles } from './pages/articles/articles';
import { Main } from './pages/main/main';
import { WorkView } from './pages/work_view/work_view';
import { Header } from '../../Components/Header/header';

const links = [
    {
        url: "",
        icon: "icons/info.png",
        name: "Главная"
    },
    {
        url: "workview/*",
        icon: "icons/presentation.png",
        name: "Работы"
    },
    {
        url: "articles/*",
        icon: "icons/google-docs.png",
        name: "Статьи"
    },
    {
        url: "/dev",
        icon: "icons/code.png",
        name: "Разработка"
    },
]

function UserSection() {

    return (
        <div className={style.container}>
            <SideBar links={links} />
            <Header />
            <Routes>
                <Route path='' element={<Main />} />
                <Route path='workview/*' element={<WorkView />} />
                <Route path='articles/*' element={<Articles />} />
            </Routes>
        </div>
    );
}

export default UserSection;