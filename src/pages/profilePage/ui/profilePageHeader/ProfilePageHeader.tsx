import { type FC, useCallback } from "react"

import cls from './ProfilePageHeader.module.scss'

import { classNames } from "@/shared/lib/classNames"
import { useTranslation } from "react-i18next"
import { Text } from "@/shared/ui/text"
import { Button, ButtonTheme } from "@/shared/ui/button"
import { useSelector } from "react-redux"
import { getProfileReadonly, profileActions } from "@/entities/profile"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const readonly = useSelector(getProfileReadonly)

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancel = useCallback(() => {
        dispatch(profileActions.setReadonly(true))
    }, [dispatch])

    return (
        <div className={classNames(cls.profilePageHeader, {}, [className])}>
            <Text title={t('Профиль')}/>
            {
                readonly
                    ? <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn} onClick={onEdit}>
                        {t('Редактировать')}
                    </Button>
                    : <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn} onClick={onCancel}>
                        {t('Отменить')}
                    </Button>
            }
        </div>
    )
}
