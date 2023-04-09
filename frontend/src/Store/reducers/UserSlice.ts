import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";

let initialState: IUser = {
    isAuthorized: false,
    isGuest: false,
    user_name: "Гость",
    user_icon: "./default_user_icon.png",
    is_log_page: false,
    auth_token: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsLogPage: (state, action: PayloadAction<boolean>) => {
            state.is_log_page = action.payload
        },
        setAuthToken: (state, action: PayloadAction<string>) => {
            state.auth_token = action.payload
            state.isAuthorized = true
            state.isGuest = false
        },
        setUserName: (state, action: PayloadAction<string>) => {
            state.user_name = action.payload
        },
    }
})

export default userSlice.reducer;