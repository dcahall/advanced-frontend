import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { type User } from "@/entities/user"
import { type StateSchema } from "@/app/providers/store"

export const loginByUsername = createAsyncThunk<User, void, { rejectValue: string, state: StateSchema }>(
    'login/fetchByUsername',
    async (authData, thunkAPI) => {
        try {
            const { username, password } = thunkAPI.getState().loginForm
            const response = await axios.post('http://localhost:8000/login', { username, password })

            if (!response.data) { throw new Error() }

            return response.data
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('error')
        }
    }
)
