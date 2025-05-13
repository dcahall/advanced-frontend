import { createAsyncThunk } from "@reduxjs/toolkit"
import { type AsyncThunkOptions } from "@/app/providers/store"
import { type Profile } from "../../types/profile"

export const fetchProfileData = createAsyncThunk<Profile, void, AsyncThunkOptions<string> >(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.get<Profile>('/profile')

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
