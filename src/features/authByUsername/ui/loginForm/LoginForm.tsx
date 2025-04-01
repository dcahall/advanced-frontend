import React, { type FC, memo, useCallback, useEffect } from "react"

import cls from './LoginForm.module.scss'

import { classNames } from "@/shared/lib/classNames"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Text, TextTheme } from "@/shared/ui/text"
import { useDispatch, useSelector, useStore } from "react-redux"
import { loginActions, loginReducer } from "../../model/slice/loginSlice"
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername"
import { type ReduxStoreWithManager } from "@/app/providers/store"

import { getPassword } from "../../model/selector/getPassword/getPassword"
import { getError } from "../../model/selector/getError/getError"
import { getUserName } from "../../model/selector/getUserName/getUserName"
import { getIsLoading } from "../../model/selector/getIsLoading/getIsLoading"

export interface LoginFormProps {
    className?: string
}

const LoginFormInner: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const store = useStore() as ReduxStoreWithManager

    const password = useSelector(getPassword)
    const username = useSelector(getUserName)
    const error = useSelector(getError)
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        store.reducerManager.add('loginForm', loginReducer)
        dispatch({ type: '@INIT loginForm reducer' })

        return () => {
            dispatch({ type: '@DESTROY loginForm reducer' })
            store.reducerManager.remove('loginForm')
        }
        // eslint-disable-next-line
}, [])

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
            <Text title={t('Форма авторизации')}/>
            {error && <Text text={t('Вы ввели неправильный логин или пароль')} theme={TextTheme.ERROR}/>}
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
const LoginForm = memo(LoginFormInner)

export default LoginForm
