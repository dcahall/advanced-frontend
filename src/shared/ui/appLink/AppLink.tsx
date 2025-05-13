import { type FC, memo, type ReactNode } from "react"
import { Link, type LinkProps } from "react-router-dom"

import cls from './AppLink.module.scss'

import { classNames } from "@/shared/lib/classNames"

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    children: ReactNode
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = memo<AppLinkProps>((props) => {
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
    )
})
