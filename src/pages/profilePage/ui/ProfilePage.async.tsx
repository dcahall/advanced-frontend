import { lazy } from "react"

export const ProfilePageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error временный костыль
    setTimeout(() => { resolve(import('./ProfilePage')) }, 2000)
}))
