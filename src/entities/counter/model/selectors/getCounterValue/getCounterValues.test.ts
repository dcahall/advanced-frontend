import { type StateSchema } from "@/app/providers/store"
import { getCounterValue } from "./getCounterValue"

describe('getCounterValues.test', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10
            }
        }

        expect(getCounterValue(state as StateSchema)).toBe(10)
    })
})
