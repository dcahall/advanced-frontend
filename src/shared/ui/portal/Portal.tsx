import { type FC, type ReactNode } from "react"
import { createPortal } from "react-dom"

interface PortalProps {
    children: ReactNode
    targetElement?: Element
}

export const Portal: FC<PortalProps> = ({ children, targetElement = document.body }) => {
    return createPortal(children, targetElement)
}
