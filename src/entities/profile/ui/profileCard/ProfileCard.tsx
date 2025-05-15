import { type FC } from "react"

import cls from './ProfileCard.module.scss'

import { classNames } from "@/shared/lib/classNames"
import { Text, TextAlign, TextTheme } from "@/shared/ui/text"
import { Input } from "@/shared/ui/input"
import { useTranslation } from "react-i18next"
import { type Profile } from "../../model/types/profile"
import { Loader } from "@/shared/ui/loader"

interface ProfileCardProps {
    onChangeFirstname: (value?: string) => void
    onChangeLastname: (value?: string) => void
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { className, data, isLoading, error, readonly, onChangeFirstname, onChangeLastname } = props
    const { t } = useTranslation('profile')

    if (isLoading) {
        return <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
            <Loader/>
        </div>
    }

    if (error) {
        return <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
            <Text
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
            />
        </div>
    }

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
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
        </div>
    )
}
