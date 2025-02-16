import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"
import { PageLoader } from "./PageLoader"

const meta = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof PageLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
