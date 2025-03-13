import { type FC, type ReactNode } from "react"
import { Provider } from "react-redux"
import { createReduxStore, type StateSchema } from "@/shared/config/store"

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
