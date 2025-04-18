import { type StateSchema, StoreProvider } from "@/app/providers/store"
import { type DeepPartial } from "@reduxjs/toolkit"
import { type ReducersMapObject } from "redux"
import { loginReducer } from "@/features/authByUsername"

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
}

export const storeDecorator = (
    state?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject>
) => (StoryComponent: any) => {
    return <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{ ...(defaultAsyncReducers as ReducersMapObject), ...(asyncReducers as ReducersMapObject) }}>
        <StoryComponent/>
    </StoreProvider>
}
