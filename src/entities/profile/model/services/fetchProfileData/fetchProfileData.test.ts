import { fetchProfileData } from "./fetchProfileData"
import { type StateSchema } from "@/app/providers/store"
import { TestAsyncThunk } from "@/shared/lib/test/testAsyncThunk"
import { type Profile } from "../../types/profile"

describe('loginByUsername.test', () => {
    let state: DeepPartial<StateSchema>

    beforeEach(() => {
        state = {
            loginForm: { username: '123', password: '123', isLoading: false, error: undefined }
        }
    })

    test('success request', async () => {
        const profile: Profile = { first: 'roman', lastname: 'romanov' }
        const thunk = new TestAsyncThunk(fetchProfileData, state)
        thunk.api.post.mockReturnValue(Promise.resolve({ data: profile }))
        const result = await thunk.callThunk()
    })

    test('error request', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData, state)
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()
    })
})
