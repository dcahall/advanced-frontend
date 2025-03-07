import { type FC, type ReactNode, useCallback, useEffect, useRef, useState } from "react"

import cls from './Modal.module.scss'

import { classNames } from "@/shared/lib/classNames"
import { Portal } from "@/shared/ui/portal"
import { useTheme } from "@/shared/themeProvider"

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = ({ isOpen, onClose, className, children }) => {
    const [isClosed, setIsClosed] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()
    const { theme } = useTheme()

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosed(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosed(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    useEffect(() => {
        return () => { clearTimeout(timerRef.current) }
    }, [])

    const onClickContent = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closed]: isClosed
    }

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className, theme, 'app_modal'])}>
                <div className={classNames(cls.overlay)} onClick={closeHandler}>
                    <div className={classNames(cls.content)} onClick={onClickContent}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
