import type { Meta, StoryObj } from '@storybook/react'
import { CountrySelect } from './CountrySelect'

const meta = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    tags: ['autodocs'],
    argTypes: {
    },
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof CountrySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
}
