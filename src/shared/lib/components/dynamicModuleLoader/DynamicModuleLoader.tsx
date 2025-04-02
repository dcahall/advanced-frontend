import { type FC, type ReactElement, useEffect } from "react"
import { useDispatch, useStore } from "react-redux"
import { type ReduxStoreWithManager, type StateSchemaKey } from "@/app/providers/store"
import { type Reducer } from "@reduxjs/toolkit"

export type ReducersList = Partial<Record<StateSchemaKey, Reducer>>

interface DynamicModuleLoaderProps {
    children: ReactElement
    reducers: ReducersList
    removeAfterUnmount: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({ children, reducers, removeAfterUnmount }) => {
    const dispatch = useDispatch()
    const store = useStore() as ReduxStoreWithManager

    useEffect(() => {
        console.log(reducers)
        Object.entries(reducers)
            .forEach(([name, reducer]: [StateSchemaKey, Reducer]) => {
                const response = store.reducerManager.add(name, reducer)
                if (response === 'success') {
                    dispatch({ type: `@INIT ${name} reducer` })
                }
            })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers)
                    .forEach(([name, reducer]: [StateSchemaKey, Reducer]) => {
                        const response = store.reducerManager.remove(name)
                        if (response === 'success') {
                            dispatch({ type: `@DESTROY ${name} reducer` })
                        }
                    })
            }
        }
        // eslint-disable-next-line
    }, [reducers])

    return children
}
