import { type CounterSchema } from "@/entities/counter"
import { type UserSchema } from "@/entities/user"
import { type LoginSchema } from "@/features/authByUsername"
import { type EnhancedStore } from "@reduxjs/toolkit"
import { type createReducerManager } from "@/app/providers/store/lib/reducerManager"

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // Асинхронные редьюсеры
    loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

type ReducerManager = ReturnType<typeof createReducerManager>

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
