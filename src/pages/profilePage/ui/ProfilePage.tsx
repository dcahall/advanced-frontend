import { type FC, memo, useCallback, useEffect } from "react"

import { classNames } from "@/shared/lib/classNames"
import { DynamicModuleLoader, type ReducersList } from "@/shared/lib/components/dynamicModuleLoader"
import {
    fetchProfileData, getProfileError,
    getProfileForm, getProfileIsLoading,
    getProfileReadonly, getProfileValidationErrors,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileError
} from "@/entities/profile"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { useSelector } from "react-redux"
import { ProfilePageHeader } from "./profilePageHeader/ProfilePageHeader"
import { type Currency } from "@/entities/currency"
import { type Country } from "@/entities/country"
import { TextTheme, Text } from "@/shared/ui/text"
import { useTranslation } from "react-i18next"

interface ProfilePageProps {
    className?: string
}

const reducersList: ReducersList = { profile: profileReducer }

const ProfilePage: FC<ProfilePageProps> = memo(({ className }) => {
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)
    const validationErrors = useSelector(getProfileValidationErrors)

    const validateErrorTranslates = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении')
    }

    useEffect(() => {
        void dispatch(fetchProfileData())
    }, [dispatch])

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch])

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        if (value?.match(/^[0-9]{0,3}$/)) {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
        }
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }))
    }, [dispatch])

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader/>
                {
                    validationErrors?.length && validationErrors.map((err) => (
                        <Text theme={TextTheme.ERROR} text={validateErrorTranslates[err]} key={err}/>
                    ))
                }
                <ProfileCard
                    data={formData}
                    readonly={readonly}
                    isLoading={isLoading}
                    error={error}
                    onChangeLastname={onChangeLastname}
                    onChangeFirstname={onChangeFirstname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    )
})

export default ProfilePage
