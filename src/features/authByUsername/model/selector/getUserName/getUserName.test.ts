import { type StateSchema } from "@/app/providers/store"
import { getUserName } from "./getUserName"

describe('getUserName.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username'
            }
        }

        expect(getUserName(state as StateSchema)).toEqual('username')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        }

        expect(getUserName(state as StateSchema)).toEqual('')
    })
})
