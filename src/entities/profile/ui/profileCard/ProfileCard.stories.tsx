import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Currency } from "@/entities/currency"
import { Country } from "@/entities/country"
import { AvatarImg } from "@/shared/assets"

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        data: {
            first: "Роман",
            lastname: "Романов",
            age: 22,
            currency: Currency.RUB,
            country: Country.Kazakhstan,
            city: "Moscow",
            username: "admin",
            avatar: AvatarImg
        }
    }
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
}

export const Error: Story = {
    args: {
        error: 'some error'
    }
}

export const Loading: Story = {
    args: {
        isLoading: true
    }
}

export const Readonly: Story = {
    args: {
        readonly: true
    }
}
