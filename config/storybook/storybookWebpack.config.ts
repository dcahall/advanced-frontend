import { type StorybookConfig } from "@storybook/react-webpack5"
import { buildCssLoader } from "../build/loaders/buildCssLoader"
import { type BuildPaths } from "../build/types/config"
import path from "path"
import webpack from "webpack"

const storybookWebpackConfig: StorybookConfig["webpackFinal"] = async (config, any) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve = config.resolve || {}
    config.plugins = config.plugins || []
    config.module = config.module || {}
    config.module.rules = config.module.rules || []

    config.resolve.extensions = [".tsx", ".ts", ".js"]
    config.resolve.alias = {
        ...config.resolve.alias,
        "@": paths.src
    }

    config.plugins.push(new webpack.DefinePlugin({
        _IS_DEV_: JSON.stringify(true),
        _BASE_URL_: JSON.stringify('http://localhost:8000')
    }))

    config.module.rules = config.module.rules.map(rule => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if ('test' in rule && /svg/.test(rule.test)) {
            return {
                ...rule,
                exclude: /\.svg$/i
            }
        }
        return rule
    })
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
    config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    })
    return config
}

export default storybookWebpackConfig
