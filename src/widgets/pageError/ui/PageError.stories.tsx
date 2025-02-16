import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"
import { PageError } from "./PageError"

const meta = {
    title: 'widgets/PageError',
    component: PageError,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof PageError>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
