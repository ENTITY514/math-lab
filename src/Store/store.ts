import { combineReducers, configureStore } from "@reduxjs/toolkit";
import HUDSlice from "./reducers/HUDSlice";
import userSlice from "./reducers/UserSlice";


const rootReducers = combineReducers({
    userSlice,
    HUDSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducers
    })
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']