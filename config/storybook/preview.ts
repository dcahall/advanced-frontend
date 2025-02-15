import type { Preview } from "@storybook/react"
import { styleDecorator } from "@/shared/config/storybook/decorators/styleDecorator"
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"

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
        themeDecorator(Theme.LIGHT)
    ]
}

export default preview
