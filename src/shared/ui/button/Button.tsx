import { type ButtonHTMLAttributes, type FC, memo, type ReactNode } from "react"

import cls from './Button.module.scss'
import { classNames, type Mods } from "@/shared/lib/classNames"

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
}

export const Button: FC<ButtonProps> = memo<ButtonProps>((props) => {
    const {
        className,
        theme = ButtonTheme.CLEAR,
        children,
        square,
        disabled = false,
        size = ButtonSize.M,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled
    }

    const additional = [className, cls[theme], cls[size]]

    return (
        <button
            className={classNames(cls.button, mods, additional)}
            {...otherProps}>
            {children}
        </button>
    )
})
