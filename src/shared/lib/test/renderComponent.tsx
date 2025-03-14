import { type ReactNode } from "react"
import { render } from "@testing-library/react"
import { I18nextProvider } from "react-i18next"
import i18nForTest from "@/shared/config/i18n/i18nForTest"
import { MemoryRouter } from "react-router-dom"
import { type DeepPartial } from "@reduxjs/toolkit"
import { type StateSchema, StoreProvider } from "@/app/providers/store"

interface RenderComponentOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export const renderComponent = (component: ReactNode, options: RenderComponentOptions = {}) => {
    const { route = '/', initialState } = options

    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}
