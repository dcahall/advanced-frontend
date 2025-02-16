import { type Decorator } from "@storybook/react"
import { Suspense } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "@/shared/config/i18n/i18n"

export const I18nDecorator: Decorator = (Story) => {
    return <Suspense fallback={<div>loading translations...</div>}>
        <I18nextProvider i18n={i18n}>
            <Story />
        </I18nextProvider>
    </Suspense>
}
