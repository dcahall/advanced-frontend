import { type FC, memo } from "react"

import cls from './SidebarItem.module.scss'

import { useTranslation } from "react-i18next"
import { AppLink, AppLinkTheme } from "@/shared/ui/appLink"
import { type SidebarItemType } from "../../model/items"
import { classNames } from "@/shared/lib/classNames"
import { getUserAuthData } from "@/entities/user"
import { useSelector } from "react-redux"

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo<SidebarItemProps>(({ item, collapsed }) => {
    const { t } = useTranslation()
    const isAuth = useSelector(getUserAuthData)

    if (item.isAuthOnly && !isAuth) { return null }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        >
            <item.Icon className={cls.icon}/>
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    )
})
