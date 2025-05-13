import { type FC, memo, useCallback, useState } from "react"

import cls from "./Navbar.module.scss"

import { classNames } from "@/shared/lib/classNames"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "@/shared/ui/button"
import { LoginModal } from "@/features/authByUsername"
import { useSelector } from "react-redux"
import { getUserAuthData, userActions } from "@/entities/user"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo<NavbarProps>(({ className }) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = () => {
        onCloseModal()
        dispatch(userActions.logout())
    }

    if (authData) {
        return <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onLogout}
            >
                {t('Выйти')}
            </Button>
        </div>
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onOpenModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    )
})
