import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from "./stateSchema"
import { counterReducer } from "@/entities/counter"
import { userReducer } from "@/entities/user"
import { type ReducersMapObject } from "redux"
import { loginReducer } from "@/features/authByUsername"

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        counter: counterReducer,
        loginForm: loginReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: _IS_DEV_,
        preloadedState: initialState
    })
}
