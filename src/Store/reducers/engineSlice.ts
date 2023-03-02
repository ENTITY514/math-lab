import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { Engine } from "../../Engine/core";
import { IEngine, Sections } from "../models/EngineModels/IEngine";

let initialState: IEngine = {
    active_section: Sections.MAIN,
    engine: new Engine(),
    project_data: {
        name: null,
        id: null
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
        changeActiveSection: (state, action: PayloadAction<Sections>) => {
            state.active_section = action.payload
        },
        mainViewCreate: (state) => {
            state.view_ready.main = true
        },
        testViewCreate: (state) => {
            state.view_ready.test = true
        },
        openProject: (state, action: PayloadAction<string>) => {
            state.engine.data_module.openProject(action.payload)
        }
    }
})

export default EngineSlice.reducer;