import { type ResolveOptions } from "webpack"

import { type BuildPaths } from "./types/config"

export function buildResolvers ({ src }: Pick<BuildPaths, 'src'>): ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"],
        mainFiles: ['index'],
        alias: {
            '@': src
        }
    }
}
