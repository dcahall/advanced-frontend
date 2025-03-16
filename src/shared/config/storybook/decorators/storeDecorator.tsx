import { StoreProvider } from "@/app/providers/store"
import { type Decorator } from "@storybook/react"

export const storeDecorator: Decorator = (Story) => {
    return <StoreProvider >
        <Story/>
    </StoreProvider>
}
