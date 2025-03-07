import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, impedit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, impedit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, impedit?'
    }
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
}
export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
