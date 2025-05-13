import { type FC } from "react"

import cls from './ProfileCard.module.scss'

import { classNames } from "@/shared/lib/classNames"
import { Text } from "@/shared/ui/text"
import { Button, ButtonTheme } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData"
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError"
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading"

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const { t } = useTranslation('profile')
    const data = useSelector(getProfileData)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')}/>
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
            </div>
        </div>
    )
}
