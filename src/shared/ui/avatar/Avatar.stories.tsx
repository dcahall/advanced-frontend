import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import { AvatarImg } from "@/shared/assets"

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        alt: 'random image',
        src: AvatarImg
    }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
    }
}

export const Small: Story = {
    args: {
        size: 50
    }
}
