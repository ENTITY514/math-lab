import { createSlice } from "@reduxjs/toolkit";
import { IHUD } from "../models/IHUD";
import { Pages } from "../models/pages";

let initialState: IHUD = {
    active_page: Pages.ABOUT,
    is_open: false,
}

export const HUDSlice = createSlice({
    name: 'hud',
    initialState,
    reducers: {
        changePageTo: (state, action) => {
            state.active_page = action.payload
        },
        open_hud: (state, action) => {
            state.is_open = action.payload
        }
    }
})

export default HUDSlice.reducer;