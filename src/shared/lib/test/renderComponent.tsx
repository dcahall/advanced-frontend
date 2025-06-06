import { type ReactNode } from "react"
import { render } from "@testing-library/react"
import { I18nextProvider } from "react-i18next"
import i18nForTest from "@/shared/config/i18n/i18nForTest"
import { MemoryRouter } from "react-router-dom"

import { type StateSchema, StoreProvider } from "@/app/providers/store"

interface RenderComponentOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export const renderComponent = (component: ReactNode, options: RenderComponentOptions = {}) => {
    const { route = '/', initialState } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState as StateSchema}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}
