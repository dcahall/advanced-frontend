import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"

import ProfilePage from "./ProfilePage"
import { storeDecorator } from "@/shared/config/storybook"

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    decorators: [
        storeDecorator({})
    ]
}
export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
        storeDecorator({})
    ]
}
