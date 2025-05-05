import type webpack from "webpack"

import { type buildOptions } from "./types/config"
import { buildCssLoader } from "./loaders/buildCssLoader"

export function buildLoaders (options: buildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    const scssLoader = buildCssLoader(options.isDev)

    const babelLoader = {
        test: /\.js|jsx|tsx$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: {
            loader: "ts-loader"
        },
        exclude: /node_modules/
    }

    return [
        svgLoader,
        fileLoader,
        babelLoader,
        typeScriptLoader,
        scssLoader
    ]
}
