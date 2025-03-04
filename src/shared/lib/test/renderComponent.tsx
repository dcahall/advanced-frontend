import { type ReactNode } from "react"
import { render } from "@testing-library/react"
import { I18nextProvider } from "react-i18next"
import i18nForTest from "@/shared/config/i18n/i18nForTest"
import { MemoryRouter } from "react-router-dom"

interface RenderComponentOptions {
    route?: string
}

export const renderComponent = (component: ReactNode, options: RenderComponentOptions = {}) => {
    const { route = '/' } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}
