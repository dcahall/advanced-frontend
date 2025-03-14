import { type DeepPartial } from "@reduxjs/toolkit"
import { counterActions, counterReducer } from "./counterSlice"
import { type CounterSchema } from "@/entities/counter"

describe('counterSlice.test', () => {
    test('increment', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10
        }

        expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 11 })
    })

    test('decrement', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10
        }

        expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({ value: 9 })
    })

    test('without state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 })
    })
})
