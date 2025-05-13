import { type StateSchema } from "@/app/providers/store"
import { getPassword } from "./getPassword"

describe('getPassword.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'password'
            }
        }

        expect(getPassword(state as StateSchema)).toEqual('password')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        }

        expect(getPassword(state as StateSchema)).toEqual('')
    })
})
