import { type FC, memo, useCallback } from "react"

import cls from './LoginForm.module.scss'

import { classNames } from "@/shared/lib/classNames"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { useDispatch, useSelector } from "react-redux"
import { loginActions } from "../../model/slice/loginSlice"
import { getLoginState } from "../../model/selector/getLoginState/getLoginState"
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername"

interface LoginFormProps {
    className?: string
}

const LoginFormInner: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { username, password, isLoading, error } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername())
    }, [dispatch])

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            {error && <div>{error}</div>}
            <Input
                value={username}
                className={cls.input}
                placeholder={t('Введите логин')}
                autoFocus
                onChange={onChangeUsername}
            />
            <Input
                value={password}
                type="password"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
            />
            <Button
                onClick={onLoginClick}
                className={classNames(cls.loginBtn)}
                theme={ButtonTheme.OUTLINE}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    )
}

export const LoginForm = memo(LoginFormInner)
