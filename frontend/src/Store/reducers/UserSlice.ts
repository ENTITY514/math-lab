import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";

let initialState: IUser = {
    isAuthorized: false,
    isGuest: false,
    user_name: "Гость",
    user_icon: "./default_user_icon.png",
    is_log_page: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsLogPage: (state, action: PayloadAction<boolean>) => {
            state.is_log_page = action.payload
        }
    }
})

export default userSlice.reducer;