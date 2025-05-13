declare module '*.scss' {
    type IClassNames = Record<string, string>

    const classNames: IClassNames
    export = classNames
}

declare module "*.jpg"
declare module "*.jpeg"
declare module "*.png"

declare module "*.svg" {
    import type React from "react"
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
    export default SVG
}

declare const _IS_DEV_: boolean
declare const _BASE_URL_: string

type DeepPartial<T> = T extends object ? {
    [K in keyof T]?: DeepPartial<T[K]>
} : T
