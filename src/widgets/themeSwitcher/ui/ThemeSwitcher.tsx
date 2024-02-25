import {ButtonHTMLAttributes, FC} from "react";

import cls from './ThemeSwitcher.module.scss';

import {DarkThemeIcon, LightThemeIcon} from "@/shared/assets";
import {classNames} from "@/shared/lib/ClassNames";
import {useTheme} from "@/shared/themeProvider";
import {Button, ButtonTheme} from "@/shared/ui/button";

interface ThemeSwitcherProps extends ButtonHTMLAttributes<any> {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {
                theme === 'light' ? <LightThemeIcon/> : <DarkThemeIcon/>
            }
        </Button>
    );
};
