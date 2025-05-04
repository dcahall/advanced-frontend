import { type FC, memo, useMemo, useState } from "react"

import cls from './Sidebar.module.scss'

import { classNames } from "@/shared/lib/classNames"
import { ThemeSwitcher } from "@/widgets/themeSwitcher"
import { LangSwitcher } from "@/widgets/langSwitcher"
import { Button, ButtonTheme, ButtonSize } from "@/shared/ui/button"
import { sidebarItemList } from "@/widgets/sidebar/model/items"
import { SidebarItem } from "../sidebarItem/SidebarItem"

interface NavbarProps {
    className?: string
}

export const Sidebar: FC<NavbarProps> = memo<NavbarProps>(({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    const items = useMemo(() => {
        return sidebarItemList.map(item => (
            <SidebarItem key={item.path} item={item} collapsed={collapsed}/>
        ))
    }, [collapsed])

    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
            data-testid={"sidebar"}
        >
            <div className={classNames(cls.items)}>
                {items}
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
})
