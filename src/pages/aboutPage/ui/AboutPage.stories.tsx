import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"

import AboutPage from "./AboutPage"

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}
export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
