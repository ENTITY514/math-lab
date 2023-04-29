import React from "react"
import style from "./auth.module.css"
import { LoginForm } from "./Components/log_in/log_in"
import { RegistrationForm } from "./Components/registration/registration"
import { useAppSelector, useAppDispatch } from "../../../../Store/hooks/redux"

export const Auth: React.FC = () => {
    const user = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()
    return (
        <div className={style.container} style={{ backgroundImage: "url(/log-in-bg.jpg)" }}>
            {
                user.is_log_page ?
                    <LoginForm /> :
                    <RegistrationForm />
            }
        </div>
    )
}