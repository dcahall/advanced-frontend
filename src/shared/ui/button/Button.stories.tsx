import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonTheme, ButtonSize } from './Button'
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

export const ClearIverted: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED
    }
}

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE
    }
}

export const OutlineSizeL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L
    }
}

export const OutlineSizeXl: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL
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

export const BackgroundTheme: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND
    }
}

export const BackgroundInverted: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED
    }
}

export const Square: Story = {
    args: {
        children: '<',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true
    }
}

export const SquareSizeL: Story = {
    args: {
        children: '<',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.L,
        square: true
    }
}

export const SquareSizeXl: Story = {
    args: {
        children: '<',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.XL,
        square: true
    }
}
