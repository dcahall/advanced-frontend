import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    args: {
    }
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {

}
export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
