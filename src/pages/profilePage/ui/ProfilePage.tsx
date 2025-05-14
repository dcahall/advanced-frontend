import { type FC, memo, useEffect } from "react"

import { classNames } from "@/shared/lib/classNames"
import { DynamicModuleLoader, type ReducersList } from "@/shared/lib/components/dynamicModuleLoader"
import { fetchProfileData, ProfileCard, profileReducer } from "@/entities/profile"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"

interface ProfilePageProps {
    className?: string
}

const reducersList: ReducersList = { profile: profileReducer }

const ProfilePage: FC<ProfilePageProps> = memo(({ className }) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        void dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    )
})

export default ProfilePage
