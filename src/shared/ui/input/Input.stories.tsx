import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"
import { fn } from "@storybook/test"

const meta = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        onChange: fn()
    }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        placeholder: 'Placeholder text'
    }
}
export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK)
    ],
    args: {
        placeholder: 'Placeholder text'
    }
}
