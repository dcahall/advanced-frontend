import {FC} from "react";

import cls from './Navbar.module.scss';

import {classNames} from "@/shared/lib/ClassNames";
import {AppLink, AppLinkTheme, ThemeSwitcher} from "@/shared/ui";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/'} className={cls.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};
