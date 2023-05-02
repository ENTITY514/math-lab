import { Route, Routes } from "react-router-dom"
import style from "./work_view.module.css"
import { Works } from "./components/works/works"
import { View } from "./components/view/view"

export const WorkView: React.FC = () => {
    return (
        <div className={style.container}>
            <Routes >
                <Route path="/*" element={<Works />} />
                <Route path="view/*" element={<View />} />
            </Routes>
        </div>
    )
}