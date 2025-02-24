import { type FC } from "react"
import { useTranslation } from "react-i18next"

import cls from "./Navbar.module.scss"

import { classNames } from "@/shared/lib/classNames/classNames"
import { AppLink, AppLinkTheme } from "@/shared/ui/appLink"
import { routerPaths } from "@/shared/config"

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={routerPaths.main}
                    className={cls.mainLink}
                >

                    {t("Главная")}
                </AppLink>

                <AppLink theme={AppLinkTheme.SECONDARY} to={routerPaths.about}>
                    {t("О сайте")}
                </AppLink>
            </div>
        </div>
    )
}
