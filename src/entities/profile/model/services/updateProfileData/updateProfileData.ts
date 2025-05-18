import { createAsyncThunk } from "@reduxjs/toolkit"
import { type AsyncThunkOptions } from "@/app/providers/store"
import { type Profile } from "../../types/profile"
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm"

export const updateProfileData = createAsyncThunk<Profile, void, AsyncThunkOptions<string> >(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI
        const formData = getProfileForm(getState())

        try {
            const response = await extra.api.put<Profile>('/profile', formData)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
