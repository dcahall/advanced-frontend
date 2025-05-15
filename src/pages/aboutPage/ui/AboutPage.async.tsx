import { lazy } from "react"

export const AboutPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error временный костыль
    setTimeout(() => { resolve(import('./AboutPage')) }, 1000)
}))
