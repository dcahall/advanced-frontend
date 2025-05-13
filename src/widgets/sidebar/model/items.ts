import { routerPaths } from "@/shared/config/router"
import { AboutIcon, MainIcon, ProfileIcon } from "@/shared/assets"
import { type SVGProps, type VoidFunctionComponent } from "react"

export interface SidebarItemType {
    path: string
    text: string
    Icon: VoidFunctionComponent<SVGProps<SVGSVGElement>>
}

export const sidebarItemList: SidebarItemType[] = [
    {
        path: routerPaths.main,
        text: 'Главная',
        Icon: MainIcon
    },
    {
        path: routerPaths.about,
        text: 'О сайте',
        Icon: AboutIcon
    },
    {
        path: routerPaths.profile,
        text: 'PROFILE',
        Icon: ProfileIcon
    }
]
