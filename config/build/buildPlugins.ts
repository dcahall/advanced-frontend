import webpack from 'webpack'
import HTMLWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin"

import { type buildOptions } from './types/config'

export function buildPlugins ({ paths, isDev }: buildOptions): webpack.WebpackPluginInstance[] {
    const plugins: webpack.WebpackPluginInstance[] = [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            _IS_DEV_: JSON.stringify(isDev)
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ]

    if (isDev) {
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }))
        plugins.push(new ReactRefreshPlugin())
        plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    return plugins
}
