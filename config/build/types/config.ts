export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface BuildEnv {
    port: number
    mode: BuildMode
    baseUrl: string
}

export interface buildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
    baseUrl: string
    project: 'storybook' | 'jest' | 'frontend'
}
