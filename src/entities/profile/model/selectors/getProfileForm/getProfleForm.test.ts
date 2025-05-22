import { type StateSchema } from "@/app/providers/store"
import { getProfileForm } from "./getProfileForm"

describe('getProfileForm.test', () => {
    test('should return value', () => {
        const profileForm = {
            lastname: 'roman'
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                data: profileForm
            }
        }

        expect(getProfileForm(state as StateSchema)).toEqual(profileForm)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        }

        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
