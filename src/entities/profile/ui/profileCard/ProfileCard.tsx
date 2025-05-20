import { type FC } from "react"

import cls from './ProfileCard.module.scss'

import { classNames, type Mods } from "@/shared/lib/classNames"
import { Text, TextAlign, TextTheme } from "@/shared/ui/text"
import { Input } from "@/shared/ui/input"
import { useTranslation } from "react-i18next"
import { type Profile } from "../../model/types/profile"
import { Loader } from "@/shared/ui/loader"
import { Avatar } from "@/shared/ui/avatar"

import { type Currency } from "@/entities/currency/model/types/currency"
import { CurrencySelect } from "@/entities/currency"

import { type Country } from "@/entities/country/model/types/country"
import { CountrySelect } from "@/entities/country"

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency?: (currency?: Currency) => void
    onChangeCountry?: (country?: Country) => void
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
    } = props
    const { t } = useTranslation('profile')

    const mods: Mods = {
        [cls.editing]: !readonly
    }

    if (isLoading) {
        return <div className={classNames(cls.profileCard, mods, [className, cls.loading])}>
            <Loader/>
        </div>
    }

    if (error) {
        return <div className={classNames(cls.profileCard, mods, [className, cls.error])}>
            <Text
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
            />
        </div>
    }

    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            {
                data?.avatar &&
                <div className={cls.avatarWrapper}>
                    <Avatar alt='avatarImg' src={data.avatar} size={50}/>
                </div>
            }
            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                onChange={onChangeFirstname}
                className={cls.input}
                readonly={readonly}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                onChange={onChangeLastname}
                className={cls.input}
                readonly={readonly}
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                onChange={onChangeAge}
                className={cls.input}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('Город')}
                onChange={onChangeCity}
                className={cls.input}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                onChange={onChangeUsername}
                className={cls.input}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                onChange={onChangeAvatar}
                className={cls.input}
                readonly={readonly}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                className={cls.input}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                className={cls.input}
                readonly={readonly}
            />
        </div>
    )
}
