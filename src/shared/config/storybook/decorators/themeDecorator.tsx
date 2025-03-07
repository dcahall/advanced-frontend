import { type Decorator } from "@storybook/react"
import { type Theme } from "@/shared/themeProvider/lib/ThemeContext"
import { classNames } from "@/shared/lib/classNames"
import { ThemeProvider } from "@/shared/themeProvider"

// eslint-disable-next-line react/display-name
export const themeDecorator = (theme: Theme): Decorator => (Story) => {
    return <ThemeProvider initialTheme={theme}>
        <div className={classNames('body app', {}, [theme])}>
            <Story/>
        </div>
    </ThemeProvider>
}
