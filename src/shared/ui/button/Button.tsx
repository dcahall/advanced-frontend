import { type ButtonHTMLAttributes, type FC } from "react"

import cls from './Button.module.scss'
import { classNames } from "@/shared/lib/classNames"

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = ButtonTheme.CLEAR,
        children,
        square,
        disabled = false,
        size = ButtonSize.M,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled
    }

    return (
        <button
            className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
            {...otherProps}>
            {children}
        </button>
    )
}
