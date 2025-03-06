import { type ButtonHTMLAttributes, type FC } from "react"

import { DarkThemeIcon, LightThemeIcon } from "@/shared/assets"
import { classNames } from "@/shared/lib/classNames"
import { useTheme } from "@/shared/themeProvider"
import { Button, ButtonTheme } from "@/shared/ui/button"

interface ThemeSwitcherProps extends ButtonHTMLAttributes<any> {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {
                theme === 'light' ? <LightThemeIcon/> : <DarkThemeIcon/>
            }
        </Button>
    )
}
