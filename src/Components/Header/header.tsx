import style from "./header.module.css"

export const Header: React.FC = () => {
    return (
        <div className={style.container}>
            <h1 className={style.name}>MathLab</h1>
        </div>
    )
}