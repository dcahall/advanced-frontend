import type { Meta, StoryObj } from '@storybook/react'
import { CurrencySelect } from './CurrencySelect'

const meta = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    tags: ['autodocs'],
    argTypes: {
    },
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof CurrencySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
}
