import { loginByUsername } from "./loginByUsername"
import { type StateSchema } from "@/app/providers/store"
import { userActions } from "@/entities/user"
import { TestAsyncThunk } from "@/shared/lib/test/testAsyncThunk"

describe('loginByUsername.test', () => {
    let state: DeepPartial<StateSchema>

    beforeEach(() => {
        state = {
            loginForm: { username: '123', password: '123', isLoading: false, error: undefined }
        }
    })

    test('success request', async () => {
        const userValue = { username: '123', id: '1' }
        const thunk = new TestAsyncThunk(loginByUsername, state)
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
        const result = await thunk.callThunk()

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('error request', async () => {
        const thunk = new TestAsyncThunk(loginByUsername, state)
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
