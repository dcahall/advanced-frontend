import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonTheme } from './Button'
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        children: "Text"
    }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR
    }
}

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE
    }
}

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE
    },
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
