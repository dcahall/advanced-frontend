import React, { type FC, memo, useCallback } from "react"

import cls from './LoginForm.module.scss'

import { classNames } from "@/shared/lib/classNames"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Text, TextTheme } from "@/shared/ui/text"
import { useSelector } from "react-redux"
import { loginActions, loginReducer } from "../../model/slice/loginSlice"
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername"

import { getPassword } from "../../model/selector/getPassword/getPassword"
import { getError } from "../../model/selector/getError/getError"
import { getUserName } from "../../model/selector/getUserName/getUserName"
import { getIsLoading } from "../../model/selector/getIsLoading/getIsLoading"
import { DynamicModuleLoader, type ReducersList } from "@/shared/lib/components/dynamicModuleLoader"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"

const reducersList: ReducersList = { loginForm: loginReducer }

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const LoginFormInner: FC<LoginFormProps> = ({ className, onSuccess }) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const password = useSelector(getPassword)
    const username = useSelector(getUserName)
    const error = useSelector(getError)
    const isLoading = useSelector(getIsLoading)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(async () => {
        // TODO fix types
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const result = await dispatch(loginByUsername())

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [dispatch, onSuccess])

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducersList}>
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
        </DynamicModuleLoader>
    )
}
const LoginForm = memo(LoginFormInner)

export default LoginForm
