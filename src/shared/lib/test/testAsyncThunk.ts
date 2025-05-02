import { type AsyncThunkAction, type DeepPartial } from "@reduxjs/toolkit"
import { type StateSchema } from "@/app/providers/store"

type ActionCreatorType<Return, Arg, RejectedValue> =
    (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>
type GetStateType = () => DeepPartial<StateSchema>
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>
    getState: GetStateType
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

    constructor (actionCreator: ActionCreatorType<Return, Arg, RejectedValue>, state?: DeepPartial<StateSchema>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn(() => state || {})
    }

    async callThunk (arg: Arg) {
        const action = this.actionCreator(arg)
        const result = await action(this.dispatch, this.getState, undefined)

        return result
    }
}
