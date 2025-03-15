import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from "./stateSchema"
import { counterReducer } from "@/entities/counter"
import { userReducer } from "@/entities/user"
import { type ReducersMapObject } from "redux"

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        counter: counterReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: _IS_DEV_,
        preloadedState: initialState
    })
}
