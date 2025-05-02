import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { type User, userActions } from "@/entities/user"
import { type StateSchema } from "@/app/providers/store"
import { USER_LOCAL_STORAGE_KEY } from "@/shared/consts/localStorage"

export const loginByUsername = createAsyncThunk<User, void, { rejectValue: string, state: StateSchema }>(
    'login/fetchByUsername',
    async (authData, thunkAPI) => {
        try {
            const { username, password } = thunkAPI.getState().loginForm
            const response = await axios.post<User>('http://localhost:8000/login', { username, password })

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)
