import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from "../types/stateSchema"
import { counterReducer } from "@/entities/counter"
import { userReducer } from "@/entities/user"
import { type ReducersMapObject } from "redux"
import { createReducerManager } from "../lib/reducerManager"

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        counter: counterReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: _IS_DEV_,
        preloadedState: initialState
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}
