import type { Meta, StoryObj } from '@storybook/react'
import { LoginModal } from './LoginModal'
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"
import { fn } from "@storybook/test"

const meta = {
    title: 'features/LoginModal',
    component: LoginModal,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        isOpen: true,
        onClose: fn()
    }
} satisfies Meta<typeof LoginModal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {

}
export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
