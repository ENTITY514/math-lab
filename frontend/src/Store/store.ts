import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import HUDSlice from "./reducers/HUDSlice";
import userSlice from "./reducers/UserSlice";
import engineSlice from "./reducers/engineSlice";

const rootReducers = combineReducers({
    userSlice,
    HUDSlice,
    engineSlice
})

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducers,
        middleware,
        devTools: process.env.NODE_ENV !== 'production'
    })
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']