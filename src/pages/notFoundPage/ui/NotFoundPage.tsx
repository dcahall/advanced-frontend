import { type FC, memo } from "react"
import { useTranslation } from "react-i18next"

import { classNames } from "@/shared/lib/classNames"

import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = memo(({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {t("Страница не найдена")}
        </div>
    )
})
