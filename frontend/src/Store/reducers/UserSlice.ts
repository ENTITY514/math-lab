import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";

let initialState: IUser = {
    isAuthorized: false,
    isGuest: false,
    user_name: null,

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    }
})

export default userSlice.reducer;