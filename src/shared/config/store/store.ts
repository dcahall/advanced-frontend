import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from "./stateSchema"

export const createReduxStore = (initialState?: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: {},
        devTools: _IS_DEV_,
        preloadedState: initialState
    })
}
