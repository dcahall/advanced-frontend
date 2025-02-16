import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from "./ThemeSwitcher"

const meta = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}
