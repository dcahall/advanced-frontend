import { type AsyncThunkAction } from "@reduxjs/toolkit"
import { type StateSchema } from "@/app/providers/store"
import axios, { type AxiosStatic } from "axios"

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

type ActionCreatorType<Return, Arg, RejectedValue> =
    (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>
type GetStateType = () => DeepPartial<StateSchema>
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>
    getState: GetStateType
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>
    api: jest.MockedFunctionDeep<AxiosStatic>
    navigate: jest.MockedFn<any>

    constructor (actionCreator: ActionCreatorType<Return, Arg, RejectedValue>, state?: DeepPartial<StateSchema>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn(() => state || {})
        this.api = mockedAxios
        this.navigate = jest.fn()
    }

    async callThunk (arg: Arg) {
        const action = this.actionCreator(arg)
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate
        })

        return result
    }
}
