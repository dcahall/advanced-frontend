import { type FC } from "react"

import cls from './LoginModal.module.scss'

import { classNames } from "@/shared/lib/classNames"
import { Modal } from "@/shared/ui/modal"
import { LoginForm } from "../loginForm/LoginForm"

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
    return (
        <Modal
            isLazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.loginModal, {}, [className])}
        >
            <LoginForm/>
        </Modal>
    )
}
