import { type ButtonHTMLAttributes, type FC } from "react"

import cls from './Button.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'm',
    L = 'L',
    XL = 'XL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    squire?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = ButtonTheme.CLEAR,
        children,
        squire,
        size = ButtonSize.M,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls.squire]: squire,
        [cls[size]]: !!size
    }

    return (
        <button
            className={classNames(cls.button, mods, [className, cls[theme]])}
            {...otherProps}>
            {children}
        </button>
    )
}
