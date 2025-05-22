import { type StateSchema } from "@/app/providers/store"
import { getProfileData } from "./getProfileData"

describe('getProfileData.test', () => {
    test('should return value', () => {
        const profileData = {
            lastname: 'roman'
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                data: profileData
            }
        }

        expect(getProfileData(state as StateSchema)).toEqual(profileData)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        }

        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
