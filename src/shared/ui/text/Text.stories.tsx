import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextTheme } from './Text'
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'Title Lorem ipsum dolor sit amet.',
        text: 'Text Lorem ipsum dolor sit amet.'
    }
}

export const Error: Story = {
    args: {
        title: 'Title Lorem ipsum dolor sit amet.',
        text: 'Text Lorem ipsum dolor sit amet.',
        theme: TextTheme.ERROR
    }
}

export const OnlyTitle: Story = {
    args: {
        title: 'Title Lorem ipsum dolor sit amet.'
    }
}

export const OnlyText: Story = {
    args: {
        text: 'Text Lorem ipsum dolor sit amet.'
    }
}

export const PrimaryDark: Story = {
    args: {
        title: 'Title Lorem ipsum dolor sit amet.',
        text: 'Text Lorem ipsum dolor sit amet.'
    },
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title Lorem ipsum dolor sit amet.'
    },
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}

export const OnlyTextDark: Story = {
    args: {
        text: 'Text Lorem ipsum dolor sit amet.'
    },
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
