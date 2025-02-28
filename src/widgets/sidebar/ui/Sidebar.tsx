import {type FC, useState} from "react"
import {useTranslation} from "react-i18next"

import cls from './Sidebar.module.scss'

import {classNames} from "@/shared/lib/classNames/classNames"
import {ThemeSwitcher} from "@/widgets/themeSwitcher"
import {LangSwitcher} from "@/widgets/langSwitcher"
import {Button, ButtonTheme, ButtonSize} from "@/shared/ui/button";
import {AppLink, AppLinkTheme} from "@/shared/ui/appLink";
import {routerPaths} from "@/shared/config";

interface NavbarProps {
    className?: string
}

export const Sidebar: FC<NavbarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const { t } = useTranslation('translation')
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(cls.navbar, { [cls.collapsed]: collapsed }, [className])}
            data-testid={"sidebar"}
        >
            <div className={classNames(cls.items)}>
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
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher isShort={collapsed} className={cls.lngSwitcher}/>
            </div>
        </div>
    )
}
