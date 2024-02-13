import webpack from "webpack";

import {buildOptions} from "./types/config";
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import {buildDevServer} from "./buildDevServer";


export function buildWebpackConfig(options: buildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;

    return (
        {
            mode,
            devtool: options.isDev ? 'inline-source-map' : undefined,
            entry: {
                myApp: paths.entry,
            },
            output: {
                filename: "[name].[contenthash].js",
                path: paths.build,
                clean: true,
            },
            resolve: buildResolvers(paths),
            module: {
                rules: buildLoaders(options)
            },
            plugins: buildPlugins(options),
            devServer: isDev ? buildDevServer(options) : undefined,
        })
}