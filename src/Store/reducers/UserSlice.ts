import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";

let initialState: IUser = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

export default userSlice.reducer;