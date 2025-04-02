import { type ReducersMapObject } from "redux"
import { type StateSchema, type StateSchemaKey } from "../types/stateSchema"
import { type AnyAction, combineReducers, type Reducer } from "@reduxjs/toolkit"

const SUCCESS_CODE = 'success'
const ERROR_CODE = 'error'

export function createReducerManager (initialReducers: ReducersMapObject<StateSchema>) {
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)
    let keysToRemove: StateSchemaKey[] = []

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                for (const key of keysToRemove) {
                    delete state[key]
                }
                keysToRemove = []
            }

            return combinedReducer(state, action)
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return ERROR_CODE
            }

            reducers[key] = reducer
            combinedReducer = combineReducers(reducers)
            return SUCCESS_CODE
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return ERROR_CODE
            }

            delete reducers[key]
            keysToRemove.push(key)
            combinedReducer = combineReducers(reducers)
            return SUCCESS_CODE
        }
    }
}
