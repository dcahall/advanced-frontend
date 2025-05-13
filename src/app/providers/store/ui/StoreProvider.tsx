import { type FC, type ReactNode } from "react"
import { Provider } from "react-redux"
import { createReduxStore } from "../store/store"
import { type StateSchema } from "../types/stateSchema"
import { type ReducersMapObject } from "redux"
import { useNavigate } from "react-router"

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
    asyncReducers?: ReducersMapObject
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
    const navigate = useNavigate()
    const store = createReduxStore(initialState, asyncReducers, navigate)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
