import { type CSSProperties, type FC, useMemo } from "react"

import cls from './Avatar.module.scss'

import { classNames } from "@/shared/lib/classNames"

interface AvatarProps {
    src?: string
    alt?: string
    size?: number
    className?: string
}

export const Avatar: FC<AvatarProps> = ({ src, alt, size, className }) => {
    const styles = useMemo<CSSProperties >(() => {
        return {
            width: size || 100,
            height: size || 100
        }
    }, [size])

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, {}, [className])}
        >
        </img>
    )
}
