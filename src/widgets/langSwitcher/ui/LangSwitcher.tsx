import { type FC } from "react"
import { useTranslation } from "react-i18next"

import cls from './LangSwitcher.module.scss'

import { classNames } from "@/shared/lib/classNames/classNames"
import { Button } from "@/shared/ui/button"

interface LangSwitcherProps {
    className?: string
    isShort?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, isShort }) => {
    const { t, i18n } = useTranslation()

    const changeLng = () => {
        void i18n
            .changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
            .then(() => { console.log('Язык успешно изменен') })
            .catch(() => { console.log('Не удалось изменить язык') })
    }

    return (
        <Button
            onClick={changeLng}
            className={classNames(cls.langSwitcher, {}, [className])}
        >
            {t(isShort ? 'Короткий язык' : 'Язык')}
        </Button>
    )
}
