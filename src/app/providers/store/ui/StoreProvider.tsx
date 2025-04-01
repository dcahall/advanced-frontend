import { type FC, type ReactNode } from "react"
import { Provider } from "react-redux"
import { createReduxStore } from "../store/store"
import { type StateSchema } from "../types/stateSchema"

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
