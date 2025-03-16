import { type FC } from "react"

import cls from './LoginForm.module.scss'

import { classNames } from "@/shared/lib/classNames"
import { useTranslation } from "react-i18next"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input className={cls.input} placeholder={t('Введите логин')} autoFocus/>
            <Input type="password" className={cls.input} placeholder={t('Введите пароль')}/>
            <Button className={classNames(cls.loginBtn)}>
                {t('Войти')}
            </Button>
        </div>
    )
}
