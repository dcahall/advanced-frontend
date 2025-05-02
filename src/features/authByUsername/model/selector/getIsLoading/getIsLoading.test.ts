import { type DeepPartial } from "@reduxjs/toolkit"
import { type StateSchema } from "@/app/providers/store"
import { getIsLoading } from "./getIsLoading"

describe('getIsLoading.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true
            }
        }

        expect(getIsLoading(state as StateSchema)).toEqual(true)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        }

        expect(getIsLoading(state as StateSchema)).toEqual(undefined)
    })
})
