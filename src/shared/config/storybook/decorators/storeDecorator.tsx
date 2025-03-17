import { type StateSchema, StoreProvider } from "@/app/providers/store"
import { type DeepPartial } from "@reduxjs/toolkit"

export const storeDecorator = (state?: DeepPartial<StateSchema>) => (StoryComponent: any) => {
    return <StoreProvider initialState={state as StateSchema}>
        <StoryComponent/>
    </StoreProvider>
}
