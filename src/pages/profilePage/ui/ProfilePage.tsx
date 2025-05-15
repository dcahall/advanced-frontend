import { type FC, memo, useCallback, useEffect } from "react"

import { classNames } from "@/shared/lib/classNames"
import { DynamicModuleLoader, type ReducersList } from "@/shared/lib/components/dynamicModuleLoader"
import { fetchProfileData, getProfileReadonly, profileActions, ProfileCard, profileReducer } from "@/entities/profile"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { useSelector } from "react-redux"
import { getProfileData } from "@/entities/profile/model/selectors/getProfileData/getProfileData"
import { getProfileError } from "@/entities/profile/model/selectors/getProfileError/getProfileError"
import { getProfileIsLoading } from "@/entities/profile/model/selectors/getProfileIsLoading/getProfileIsLoading"
import { ProfilePageHeader } from "./profilePageHeader/ProfilePageHeader"

interface ProfilePageProps {
    className?: string
}

const reducersList: ReducersList = { profile: profileReducer }

const ProfilePage: FC<ProfilePageProps> = memo(({ className }) => {
    const dispatch = useAppDispatch()
    const data = useSelector(getProfileData)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)

    useEffect(() => {
        void dispatch(fetchProfileData())
    }, [dispatch])

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch])

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader/>
                <ProfileCard
                    data={data}
                    readonly={readonly}
                    isLoading={isLoading}
                    error={error}
                    onChangeLastname={onChangeLastname}
                    onChangeFirstname={onChangeFirstname}
                />
            </div>
        </DynamicModuleLoader>
    )
})

export default ProfilePage
