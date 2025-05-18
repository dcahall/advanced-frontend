import { type FC } from "react"

import cls from './Select.module.scss'

import { classNames } from "@/shared/lib/classNames"
import { useTranslation } from "react-i18next"

interface SelectProps {
    className?: string
}

export const Select: FC<SelectProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.select, {}, [className])}>
        </div>
    )
}
