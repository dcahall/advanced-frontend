import { type CombinedState, configureStore, type Reducer } from '@reduxjs/toolkit'
import { type StateSchema, type ThunkExtraArg } from "../types/stateSchema"
import { counterReducer } from "@/entities/counter"
import { userReducer } from "@/entities/user"
import { type ReducersMapObject } from "redux"
import { createReducerManager } from "../lib/reducerManager"
import { $api } from "@/shared/api"
import { type NavigateFunction } from "react-router"

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject,
    navigate?: NavigateFunction
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        counter: counterReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const thunkExtraArg: ThunkExtraArg = {
        api: $api,
        navigate
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: _IS_DEV_,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: thunkExtraArg
            }
        })
    })

    // @ts-expect-error - We're adding reducerManager to store for async reducers
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
