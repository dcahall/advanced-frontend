import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import { fn } from "@storybook/test"

const meta = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
    },
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        onChange: fn(),
        label: 'Укажите значение',
        options: [
            { value: 'Первое значение', content: 'Первое значение' },
            { value: 'Второе значение', content: 'Второе значение' }
        ]
    }
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
}
