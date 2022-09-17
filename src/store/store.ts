import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import { load, save } from "redux-localstorage-simple"
import user from "./user"
import clients from "./client"
import modals from "./modals"
import storeClothes from "./storeClothes"
import notifications from "./notifications"

const PERSISTED_KEYS: string[] = ["user"]

const store = configureStore({
    reducer: {
        user,
        clients,
        modals,
        storeClothes,
        notifications
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(logger)
    .concat(save({states: PERSISTED_KEYS})),
    preloadedState: load({ states:PERSISTED_KEYS })
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
