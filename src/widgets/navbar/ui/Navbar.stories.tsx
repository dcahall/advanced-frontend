import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"
import { Navbar } from "./Navbar"
import { storeDecorator } from "@/shared/config/storybook"

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    decorators: [
        storeDecorator()
    ]
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const AuthNavbar: Story = {
    decorators: [
        storeDecorator({ user: { authData: { username: 'admin', id: '1' } } })
    ]
}

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
