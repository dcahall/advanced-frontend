import { type FC, memo } from "react"

import cls from './Text.module.scss'

import { classNames } from "@/shared/lib/classNames"

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
}

export const Text: FC<TextProps> = memo<TextProps>((props) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT
    } = props

    const additional = [
        className,
        cls[theme],
        cls[align]
    ]

    return (
        <div className={classNames(cls.text, { }, additional)}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})
