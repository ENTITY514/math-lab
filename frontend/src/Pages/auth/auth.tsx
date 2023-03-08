import { useAppDispatch, useAppSelector } from "../../Store/hooks/redux"
import { ImageUI } from "../../UI/Image/image"
import { InputUI } from "../../UI/InputUI/input"
import style from "./auth.module.css"

export const Auth: React.FC = () => {
    const user = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()
    return (
        <div className={style.container} style={{ backgroundImage: "url(/log-in-bg.jpg)" }}>
            <div className={style.box}>
                <div className={style.image_wrapper}>
                    <ImageUI url="/CROSS-ENGINE-logo.png" />
                </div>
                <h2 className={style.title}>Регистрация</h2>
                <InputUI placeHolder={"Username"} />
                <InputUI placeHolder={"Mail"} />
                <InputUI placeHolder={"Password"} type={"password"} />
                <div className={style.button}>Зарегистрироваться</div>
            </div>
        </div>
    )
}