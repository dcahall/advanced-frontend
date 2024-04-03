import { type FC } from "react"
import { useTranslation } from "react-i18next"

import cls from './pageError.module.scss'

import { classNames } from "@/shared/lib/classNames"

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation()

    const onReloadPage = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t("Произошла непредвиденная ошибка")}</p>
            <button onClick={onReloadPage}>{t("Обновить страницу")}</button>
        </div>
    )
}
