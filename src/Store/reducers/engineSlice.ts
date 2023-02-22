import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { IEngine, Sections } from "../models/EngineModels/IEngine";

let initialState: IEngine = {
    active_section: Sections.MAIN,
    project_data: {
        name: "project_name",
        id: nanoid()
    },
    view_ready: {
        main: false,
        test: false
    }
}

export const EngineSlice = createSlice({
    name: 'engine',
    initialState,
    reducers: {
        changeSection: (state, action: PayloadAction<Sections>) => {
            state.active_section = action.payload
        },
        MainViewCreate: (state) => {
            state.view_ready.main = true
        },
        TestViewCreate: (state) => {
            state.view_ready.test = true
        }
    }
})

export default EngineSlice.reducer;