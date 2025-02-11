import { type FC } from "react"

import cls from './pageLoader.module.scss'

import { classNames } from "@/shared/lib/classNames/classNames"
import { Loader } from "@/shared/ui/loader"

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader/>
        </div>
    )
}
