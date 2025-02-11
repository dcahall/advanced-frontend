import { type FC, useState } from "react"
import { useTranslation } from "react-i18next"

import cls from './Sidebar.module.scss'

import { classNames } from "@/shared/lib/classNames/classNames"
import { ThemeSwitcher } from "@/widgets/themeSwitcher"
import { LangSwitcher } from "@/widgets/LangSwitcher/ui/LangSwitcher"
interface NavbarProps {
    className?: string
}

export const Sidebar: FC<NavbarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const { t } = useTranslation()
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(cls.navbar, { [cls.collapsed]: collapsed }, [className])}
            data-testid={"sidebar"}
        >
            <button onClick={onToggle} data-testid={"toggle-btn"}>{t('Открыть меню:')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lngSwitcher}/>
            </div>
        </div>
    )
}
