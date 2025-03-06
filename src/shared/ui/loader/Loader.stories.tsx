import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from "./Loader"
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"

const meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}
export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
