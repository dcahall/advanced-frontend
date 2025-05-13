import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from "../types/stateSchema"
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

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: _IS_DEV_,
        preloadedState: initialState,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate
                }
            }
        })
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
