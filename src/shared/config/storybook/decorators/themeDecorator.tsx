import { type Decorator } from "@storybook/react"
import { type Theme } from "@/shared/themeProvider/lib/ThemeContext"
import { classNames } from "@/shared/lib/classNames"

// eslint-disable-next-line react/display-name
export const themeDecorator = (theme: Theme): Decorator => (Story) => {
    return <div className={classNames('app', {}, [theme])}>
        <Story/>
    </div>
}
