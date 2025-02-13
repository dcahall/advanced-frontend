import { type StorybookConfig } from "@storybook/react-webpack5"
import { buildCssLoader } from "../build/loaders/buildCssLoader"
import { type BuildPaths } from "../build/types/config"
import path from "path"

const storybookWebpackConfig: StorybookConfig["webpackFinal"] = async (config) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, '..', '..', "src", "index.tsx"),
        build: path.resolve(__dirname, '..', '..', "build"),
        html: path.resolve(__dirname, '..', '..', 'public', 'index.html'),
        src: path.resolve(__dirname, '..', '..', 'src/')
    }

    config.resolve.extensions = [".tsx", ".ts", ".js"]
    config.resolve.alias = {
        ...config.resolve.alias,
        "@": paths.src
    }
    config.module.rules.push(buildCssLoader(true))
    config.module.rules.push({
        test: /\.js|jsx|tsx$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    })
    return config
}

export default storybookWebpackConfig
