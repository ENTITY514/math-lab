import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";

let initialState: IUser = {
    isAuthorized: false,
    user_name: null,
    projects: [],

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createProject: (state, action: PayloadAction<{ name: string, id: string }>) => {
            state.projects.push(action.payload)
        },
    }
})

export default userSlice.reducer;