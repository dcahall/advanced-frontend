import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Profile, type ProfileSchema } from "../types/profile"
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData"

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            }
        )
        builder.addCase(
            fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.error = undefined
                state.isLoading = false
                state.data = action.payload
            }
        )
        builder.addCase(
            fetchProfileData.rejected,
            (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.isLoading = false
                state.data = undefined
            }
        )
    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
