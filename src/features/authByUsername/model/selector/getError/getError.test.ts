import { type StateSchema } from "@/app/providers/store"
import { getError } from "./getError"

describe('getError.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error'
            }
        }

        expect(getError(state as StateSchema)).toEqual('error')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        }

        expect(getError(state as StateSchema)).toEqual(undefined)
    })
})
