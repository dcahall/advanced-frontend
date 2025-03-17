import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type LoginSchema } from "../types/loginSchema"
import { loginByUsername } from "../services/loginByUsername/loginByUsername"

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(loginByUsername.fulfilled, (state, action) => {
            state.error = undefined
            state.isLoading = false
            state.username = ''
            state.password = ''
        })
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
            state.password = ''
        })
    }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
