export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildEnv {
    port: number;
    mode: BuildMode;
}

export interface buildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean,
    port: number,
}