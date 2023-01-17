import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { IEngine, Sections } from "../models/EngineModels/IEngine";

let initialState: IEngine = {
    active_section: Sections.MAIN,
    project_name: "project_name",
    project_id: nanoid()
}

export const EngineSlice = createSlice({
    name: 'engine',
    initialState,
    reducers: {
        changeSection: (state, action: PayloadAction<Sections>) => {
            state.active_section = action.payload
        },
    }
})

export default EngineSlice.reducer;