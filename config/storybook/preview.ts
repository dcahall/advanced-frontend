import type { Preview } from "@storybook/react"
import { styleDecorator } from "../../src/shared/config/storybook/decorators/styleDecorator"
import { themeDecorator } from "../../src/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "../../src/shared/themeProvider/lib/ThemeContext"
import { routerDecorator } from "../../src/shared/config/storybook/decorators/routerDecorator"

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
        styleDecorator,
        routerDecorator,
        themeDecorator(Theme.LIGHT)
    ]
}

export default preview
