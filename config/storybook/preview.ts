import type { Preview } from "@storybook/react"
import { styleDecorator, themeDecorator, routerDecorator, storeDecorator } from "../../src/shared/config/storybook"
import { Theme } from "../../src/shared/themeProvider/lib/ThemeContext"

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [
        storeDecorator,
        styleDecorator,
        routerDecorator,
        themeDecorator(Theme.LIGHT)
    ]
}

export default preview
