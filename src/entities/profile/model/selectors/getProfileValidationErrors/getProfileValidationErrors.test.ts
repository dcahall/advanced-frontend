import { type StateSchema } from "@/app/providers/store"
import { getProfileValidationErrors } from "./getProfileValidationErrors"
import { ValidateProfileError } from "@/entities/profile"

describe('getProfileValidationErrors.test', () => {
    test('should return value', () => {
        const validationErrors = [ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_USER_DATA]

        const state: DeepPartial<StateSchema> = {
            profile: {
                validationErrors
            }
        }

        expect(getProfileValidationErrors(state as StateSchema)).toEqual(validationErrors)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        }

        expect(getProfileValidationErrors(state as StateSchema)).toEqual(undefined)
    })
})
