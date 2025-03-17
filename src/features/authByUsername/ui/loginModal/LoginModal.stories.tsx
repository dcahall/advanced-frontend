import type { Meta, StoryObj } from '@storybook/react'
import { LoginModal } from './LoginModal'
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"
import { fn } from "@storybook/test"
import { storeDecorator } from "@/shared/config/storybook"

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
    },
    decorators: [
        storeDecorator({ loginForm: { username: 'admin', password: 'admin' } })
    ]
} satisfies Meta<typeof LoginModal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
}

export const Error: Story = {
    decorators: [
        storeDecorator(
            {
                loginForm: {
                    username: 'admin',
                    password: 'admin',
                    error: 'error happens'
                }
            }
        )
    ]
}

export const Loading: Story = {
    decorators: [
        storeDecorator(
            {
                loginForm: {
                    username: 'admin',
                    password: 'admin',
                    isLoading: true
                }
            }
        )
    ]
}

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
