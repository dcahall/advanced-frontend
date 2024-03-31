import { type RouteProps } from "react-router-dom"

import { MainPage } from "@/pages/mainPage"
import { AboutPage } from "@/pages/aboutPage"

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const routerPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routerPaths[AppRoutes.MAIN],
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: routerPaths[AppRoutes.ABOUT],
        element: <AboutPage/>
    }
}
