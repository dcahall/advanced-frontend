import type { Preview } from "@storybook/react"
import { styleDecorator } from "../../src/shared/config/storybook/decorators/styleDecorator"
import '../../src/app/styles/index.scss'
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
        styleDecorator
    ]
}

export default preview
