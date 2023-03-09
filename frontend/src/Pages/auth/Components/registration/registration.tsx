import { useAppSelector, useAppDispatch } from "../../../../Store/hooks/redux"
import { userSlice } from "../../../../Store/reducers/UserSlice"
import { ImageUI } from "../../../../UI/Image/image"
import { InputUI } from "../../../../UI/InputUI/input"
import style from "./registration.module.css"

export const RegistrationForm: React.FC = () => {
    const user = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()
    const actions = userSlice.actions
    return (
        <form action="" method="post">
            <div className={style.box}>
                <div className={style.image_wrapper}>
                    <ImageUI url="/CROSS-ENGINE-logo.png" />
                </div>
                <h2 className={style.title}>Регистрация</h2>
                <InputUI placeHolder={"Username"} />
                <InputUI placeHolder={"Mail"} type={"mail"} />
                <InputUI placeHolder={"Password"} type={"password"} />
                <button className={style.button}>Зарегистрироваться</button>
                <div className={style.link} onClick={()=>{dispatch(actions.setIsLogPage(true))}}>Есть аккаунт?</div>
            </div>
        </form>
    )
}