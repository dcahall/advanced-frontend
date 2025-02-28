import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"
import { LangSwitcher } from "./LangSwitcher"

const meta = {
    title: 'widgets/LangSwitcher',
    component: LangSwitcher,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof LangSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}

export const Short: Story = {
    args: {
        isShort: true
    }
}

