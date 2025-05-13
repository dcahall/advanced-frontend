import { type StateSchema } from "@/app/providers/store"
import { getLoginState } from "./getLoginState"

describe('getLoginState.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username',
                password: 'password',
                isLoading: true,
                error: 'error'
            }
        }

        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'username',
            password: 'password',
            isLoading: true,
            error: 'error'
        })
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        }

        expect(getLoginState(state as StateSchema)).toEqual(undefined)
    })
})
