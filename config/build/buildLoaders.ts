import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

import { buildOptions } from "./types/config";

export function buildLoaders(options: buildOptions): webpack.RuleSetRule[] {

  const ScssLoader = {
    test: /\.s[ac]ss$/i,
        use: [
          options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
  }

  // TS умеет работать с расширением jsx и tsx, так бы пришлось подключать babel
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [
    typeScriptLoader,
    ScssLoader,
  ];
}
