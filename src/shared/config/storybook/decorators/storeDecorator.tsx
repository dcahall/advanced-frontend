import { type StateSchema, StoreProvider } from "@/app/providers/store"
import { type ReducersMapObject } from "redux"
import { loginReducer } from "@/features/authByUsername"
import { profileReducer } from "@/entities/profile"
import { type ReducersList } from "@/shared/lib/components/dynamicModuleLoader"

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer
}

export const storeDecorator = (
    state?: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) => (StoryComponent: any) => {
    return <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{ ...(defaultAsyncReducers as ReducersMapObject), ...(asyncReducers as ReducersMapObject) }}>
        <StoryComponent/>
    </StoreProvider>
}
