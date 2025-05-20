import { createAsyncThunk } from "@reduxjs/toolkit"
import { type AsyncThunkOptions } from "@/app/providers/store"
import { type Profile, ValidateProfileError } from "../../types/profile"
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm"
import { validateProfile } from "../../lib/validateProfile/validateProfile"

export const updateProfileData = createAsyncThunk<Profile, void, AsyncThunkOptions<ValidateProfileError[]> >(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI
        const formData = getProfileForm(getState())
        const errors = validateProfile(formData)

        if (errors?.length) {
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
    }
)
