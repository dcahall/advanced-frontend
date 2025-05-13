import { type FC, memo } from "react"

import './Loader.scss'

import { classNames } from "@/shared/lib/classNames"

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = memo<LoaderProps>(({ className }) => {
    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
})
