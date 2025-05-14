import { type FC, type ReactElement, useEffect } from "react"
import { useStore } from "react-redux"
import { type ReduxStoreWithManager, type StateSchemaKey } from "@/app/providers/store"
import { type Reducer } from "@reduxjs/toolkit"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"

export type ReducersList = Partial<Record<StateSchemaKey, Reducer>>

interface DynamicModuleLoaderProps {
    children: ReactElement
    reducers: ReducersList
    removeAfterUnmount: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({ children, reducers, removeAfterUnmount }) => {
    const dispatch = useAppDispatch()
    const store = useStore() as ReduxStoreWithManager

    useEffect(() => {
        Object.entries(reducers)
            .forEach(([name, reducer]) => {
                const response = store.reducerManager.add(name as StateSchemaKey, reducer)
                if (response === 'success') {
                    dispatch({ type: `@INIT ${name} reducer` })
                }
            })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers)
                    .forEach(([name]) => {
                        const response = store.reducerManager.remove(name as StateSchemaKey)
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
