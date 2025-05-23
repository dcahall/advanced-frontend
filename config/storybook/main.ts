import storybookWebpackConfig from "./storybookWebpack.config"
import { type StorybookConfig } from "@storybook/react-webpack5"

const config: StorybookConfig = {
    stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions"
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {}
    },
    webpackFinal: storybookWebpackConfig
}
export default config
