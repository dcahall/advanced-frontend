import { type RouteProps } from "react-router-dom"

import { MainPage } from "@/pages/mainPage"
import { AboutPage } from "@/pages/aboutPage"
import { NotFoundPage } from "@/pages/notFoundPage"
import { ProfilePage } from "@/pages/profilePage"

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    // LAST
    NOT_FOUND = 'not_found'
}

export const routerPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routerPaths[AppRoutes.MAIN],
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: routerPaths[AppRoutes.ABOUT],
        element: <AboutPage/>
    },
    [AppRoutes.PROFILE]: {
        path: routerPaths[AppRoutes.PROFILE],
        element: <ProfilePage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: routerPaths[AppRoutes.NOT_FOUND],
        element: <NotFoundPage/>
    }
}
