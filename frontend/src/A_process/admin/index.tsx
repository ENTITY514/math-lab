import { Routes, Route } from 'react-router-dom';
import { SideBar } from '../../Components/SideBar/sidebar';
import style from "./style.module.css"
import { Header } from '../../Components/Header/header';
import UIView from './UI_View/view';

const links = [
    {
        url: "",
        icon: "icons/info.png",
        name: "Главная"
    },
]

function Admin() {
    return (
        <div className={style.container}>
            <SideBar links={links} />
            <Header />
            <Routes>
                <Route path='' element={<UIView />} />
            </Routes>
        </div>
    );
}

export default Admin;