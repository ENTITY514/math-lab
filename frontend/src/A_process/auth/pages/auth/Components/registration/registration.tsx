import style from "./registration.module.css"
import axios from "axios"
import React from "react"
import { useAppSelector, useAppDispatch } from "../../../../../../Store/hooks/redux"
import { userSlice } from "../../../../../../Store/reducers/UserSlice"
import { ImageUI } from "../../../../../../UI/Image/image"
import { InputUI } from "../../../../../../UI/InputUI/input"

export const RegistrationForm: React.FC = () => {
    const user = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()
    const actions = userSlice.actions

    const [data, set_data] = React.useState({
        username: "",
        password: "",
        email: ""
    })

    const setName = (value: string) => {
        set_data(prev => { return { ...prev, username: value } })
    }
    const setMail = (value: string) => {
        set_data(prev => { return { ...prev, email: value } })
    }
    const setPassword = (value: string) => {
        set_data(prev => { return { ...prev, password: value } })
    }

    const handleSubmit = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/api/v1/auth/users/', data).
                then(res => {
                    console.log(res.data.username);
                    if (res.data.username) {
                        dispatch(actions.setIsLogPage(true))
                    }
                }).
                catch(error => console.log(error));
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={style.box}>
            <div className={style.image_wrapper}>
                <ImageUI url="/CROSS-ENGINE-logo.png" />
            </div>
            <h2 className={style.title}>Регистрация</h2>
            <InputUI placeHolder={"Username"} onChange={setName} />
            <InputUI placeHolder={"Mail"} type={"mail"} onChange={setMail} />
            <InputUI placeHolder={"Password"} type={"password"} onChange={setPassword} />
            <button className={style.button} onClick={() => { handleSubmit() }}>Зарегистрироваться</button>
            <div className={style.link}  onClick={() => { dispatch(actions.setIsLogPage(true)) }}>Есть аккаунт?</div>
        </div>
    )
}