import { type CounterSchema } from "@/entities/counter"
import { type UserSchema } from "@/entities/user"
import { type LoginSchema } from "@/features/authByUsername"
import { type EnhancedStore } from "@reduxjs/toolkit"
import { type createReducerManager } from "@/app/providers/store/lib/reducerManager"
import { type ProfileSchema } from "@/entities/profile"
import { type AxiosInstance } from "axios"
import { type NavigateFunction } from "react-router"

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // Асинхронные редьюсеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

type ReducerManager = ReturnType<typeof createReducerManager>

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: NavigateFunction
}

export interface AsyncThunkOptions<T> {
    rejectValue: T
    state: StateSchema
    extra: ThunkExtraArg
}
