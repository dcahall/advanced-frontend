import { createAsyncThunk } from "@reduxjs/toolkit"
import { type User, userActions } from "@/entities/user"
import { type AsyncThunkOptions } from "@/app/providers/store"
import { USER_LOCAL_STORAGE_KEY } from "@/shared/consts/localStorage"

export const loginByUsername = createAsyncThunk<User, void, AsyncThunkOptions<string> >(
    'login/fetchByUsername',
    async (authData, thunkAPI) => {
        const { dispatch, getState, extra, rejectWithValue } = thunkAPI

        try {
            const { username, password } = getState().loginForm
            const response = await extra.api.post<User>('/login', { username, password })

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
