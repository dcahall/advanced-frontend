import axios from 'axios'
import { loginByUsername } from "./loginByUsername"
import { type DeepPartial } from "@reduxjs/toolkit"
import { type StateSchema } from "@/app/providers/store"
import { userActions } from "@/entities/user"
import { TestAsyncThunk } from "@/shared/lib/test/testAsyncThunk"

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername.test', () => {
    let state: DeepPartial<StateSchema>

    beforeEach(() => {
        state = {
            loginForm: { username: '123', password: '123', isLoading: false, error: undefined }
        }
    })

    test('success request', async () => {
        const userValue = { username: '123', id: '1' }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
        const thunk = new TestAsyncThunk(loginByUsername, state)
        const result = await thunk.callThunk()

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('error request', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const thunk = new TestAsyncThunk(loginByUsername, state)
        const result = await thunk.callThunk()

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
