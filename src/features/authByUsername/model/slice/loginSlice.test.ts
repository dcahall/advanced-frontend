import { loginActions, loginReducer } from "@/features/authByUsername/model/slice/loginSlice"
import { type DeepPartial } from "@reduxjs/toolkit"
import { type LoginSchema } from "@/features/authByUsername"

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '' }
        const result = loginReducer(state as LoginSchema, loginActions.setUsername('admin'))

        expect(result).toEqual({ username: 'admin' })
    })

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '' }
        const result = loginReducer(state as LoginSchema, loginActions.setPassword('password'))

        expect(result).toEqual({ password: 'password' })
    })
})
