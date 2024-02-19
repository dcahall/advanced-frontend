import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";

import cls from './AppLink.module.scss';

import {classNames} from "@/shared/lib/ClassNames";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        theme = AppLinkTheme.PRIMARY,
        to,
        children,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
