import { type ButtonHTMLAttributes, type FC, memo } from "react"

import { DarkThemeIcon, LightThemeIcon } from "@/shared/assets"
import { classNames } from "@/shared/lib/classNames"
import { useTheme, Theme } from "@/shared/themeProvider"
import { Button, ButtonTheme } from "@/shared/ui/button"

interface ThemeSwitcherProps extends ButtonHTMLAttributes<any> {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo<ThemeSwitcherProps>(({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {
                theme === Theme.LIGHT ? <LightThemeIcon/> : <DarkThemeIcon/>
            }
        </Button>
    )
})
