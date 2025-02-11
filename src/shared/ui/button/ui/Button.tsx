import { type ButtonHTMLAttributes, type FC } from "react"

import cls from './Button.module.scss'

import { classNames } from "@/shared/lib/classNames/classNames"

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = ButtonTheme.CLEAR,
        children,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}>
            {children}
        </button>
    )
}
