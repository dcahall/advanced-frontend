import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from "./stateSchema"
import { counterReducer } from "@/entities/counter"

export const createReduxStore = (initialState?: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: _IS_DEV_,
        preloadedState: initialState
    })
}
