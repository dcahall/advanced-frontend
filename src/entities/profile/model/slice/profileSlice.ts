import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Profile, type ProfileSchema } from "../types/profile"
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData"
import { updateProfileData } from "../services/updateProfileData/updateProfileData"

const initialState: ProfileSchema = {
    data: undefined,
    form: undefined,
    isLoading: false,
    error: undefined,
    readonly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.form = state.data
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            }
        }
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
                state.form = action.payload
            }
        )
        builder.addCase(
            fetchProfileData.rejected,
            (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.data = undefined
                state.form = undefined
            }
        )
        builder.addCase(
            updateProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            }
        )
        builder.addCase(
            updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.error = undefined
                state.isLoading = false
                state.readonly = true
                state.data = action.payload
                state.form = action.payload
            }
        )
        builder.addCase(
            updateProfileData.rejected,
            (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.data = undefined
                state.form = undefined
            }
        )
    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
