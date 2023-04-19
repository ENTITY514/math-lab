
import { Link } from "react-router-dom"
import style from "./sections.module.css"

export const SectionsChoice: React.FC = () => {
    return (
        <div className={style.container}>
            <Link to="main" className={style.section}>
                Основной редактор
            </Link>
            <Link to="code" className={style.section}>
                Текстовый редактор
            </Link>
            <Link to="test" className={style.section}>
                Тест
            </Link>
            <Link to="compile" className={style.section}>
                Экспорт
            </Link>
        </div >
    )
}