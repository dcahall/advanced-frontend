import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from "@/shared/config/storybook/decorators/themeDecorator"
import { Theme } from "@/shared/themeProvider/lib/ThemeContext"
import { AppLink, AppLinkTheme } from "./AppLink"

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        children: 'Link',
        to: '/'
    }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    }
}

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    }
}

export const Red: Story = {
    args: {
        theme: AppLinkTheme.RED
    }
}

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [themeDecorator(Theme.DARK)]
}

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [themeDecorator(Theme.DARK)]
}

export const RedDark: Story = {
    args: {
        theme: AppLinkTheme.RED
    },
    decorators: [themeDecorator(Theme.DARK)]
}
