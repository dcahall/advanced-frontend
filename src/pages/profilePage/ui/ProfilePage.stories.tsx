import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"

import ProfilePage from "./ProfilePage"
import { storeDecorator } from "@/shared/config/storybook"
import { Country } from "@/entities/country"
import { Currency } from "@/entities/currency"

const profile = {
    first: "Роман",
    lastname: "Романов",
    age: 22,
    currency: Currency.RUB,
    country: Country.Armenia,
    city: "Moscow",
    username: "admin",
    avatar: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
}

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    decorators: [
        storeDecorator({
            profile: {
                form: profile
            }
        })
    ]
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
}
export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
