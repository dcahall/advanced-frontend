import { type FC, memo } from "react"

import { classNames } from "@/shared/lib/classNames"
import { useTranslation } from "react-i18next"
import { DynamicModuleLoader, type ReducersList } from "@/shared/lib/components/dynamicModuleLoader"
import { profileReducer } from "@/entities/profile"

interface ProfilePageProps {
    className?: string
}

const reducersList: ReducersList = { profile: profileReducer }

const ProfilePage: FC<ProfilePageProps> = memo(({ className }) => {
    const { t } = useTranslation()

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('PROFILE_PAGE')}
            </div>
        </DynamicModuleLoader>
    )
})

export default ProfilePage
