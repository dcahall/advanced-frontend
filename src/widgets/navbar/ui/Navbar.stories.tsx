import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"
import { Navbar } from "./Navbar"

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
