import { type FC, Suspense } from "react"

import { classNames } from "@/shared/lib/classNames"
import { Modal } from "@/shared/ui/modal"
import { LoginFormAsync } from "../loginForm/LoginForm.async"
import { Loader } from "@/shared/ui/loader"

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
            className={classNames('', {}, [className])}
        >
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync onSuccess={onClose}/>
            </Suspense>
        </Modal>
    )
}
