import { type FC, type ReactNode } from "react"
import { Provider } from "react-redux"
import { createReduxStore } from "../store/store"
import { type StateSchema } from "../types/stateSchema"
import { type ReducersMapObject } from "redux"

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
    asyncReducers?: ReducersMapObject
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
    const store = createReduxStore(initialState, asyncReducers)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
