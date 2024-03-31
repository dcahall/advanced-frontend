import { lazy } from "react"

export const MainPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error временный костыль
    setTimeout(() => { resolve(import('./MainPage')) }, 2000)
}))
