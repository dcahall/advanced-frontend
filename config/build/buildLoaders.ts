import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

import {buildOptions} from "./types/config";

export function buildLoaders(options: buildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resourcePath: string) => resourcePath.includes('.module.'),
                        localIdentName: options.isDev ? "[path][name]__[hash:base64:5]" : "[hash:base64:5]"
                    },
                }
            },
            "sass-loader",
        ],
    }

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

    // TS умеет работать с расширением jsx и tsx, так бы пришлось подключать babel
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [
        svgLoader,
        fileLoader,
        babelLoader,
        typeScriptLoader,
        scssLoader,
    ];
}
