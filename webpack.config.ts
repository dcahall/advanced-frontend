import type webpack from 'webpack'
import path from 'path'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src/')
    }

    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const port = env.port || 3000
    const baseUrl = env.baseUrl || 'http://localhost:8000'

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        baseUrl
    })

    return config
}
