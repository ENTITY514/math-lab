import React from "react"
import { useAppSelector, useAppDispatch } from "../../../../../../Store/hooks/redux"
import { userSlice } from "../../../../../../Store/reducers/UserSlice"
import { ImageUI } from "../../../../../../UI/Image/image"
import { InputUI } from "../../../../../../UI/InputUI/input"
import style from "./log_in.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const LoginForm: React.FC = () => {
    const user = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()
    const actions = userSlice.actions
    
    const nav = useNavigate()

    const [data, set_data] = React.useState({
        username: "",
        password: "",
    })

    const setName = (value: string) => {
        set_data(prev => { return { ...prev, username: value } })
    }
    const setPassword = (value: string) => {
        set_data(prev => { return { ...prev, password: value } })
    }

    const handleSubmit = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/auth/token/login', data).
                then(res => {
                    if (res.data) {
                        dispatch(actions.setAuthToken(res.data.auth_token))
                        dispatch(actions.setUserName(data.username))
                        nav("/")
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
            <h2 className={style.title}>Вход</h2>
            <InputUI placeHolder={"Name"} onChange={setName} />
            <InputUI placeHolder={"Password"} type={"password"} onChange={setPassword} />
            <button className={style.button} onClick={() => { handleSubmit() }}>Войти</button>
            <div className={style.link} onClick={() => { dispatch(actions.setIsLogPage(false)) }}>Зарегистрироваться?</div>
        </div>
    )
}