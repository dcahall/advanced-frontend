import { type FC, useCallback, useState } from "react"

import cls from "./Navbar.module.scss"

import { classNames } from "@/shared/lib/classNames"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "@/shared/ui/button"
import { Modal } from "@/shared/ui/modal"

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line i18next/no-literal-string */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, impedit?
            </Modal>
        </div>
    )
}
