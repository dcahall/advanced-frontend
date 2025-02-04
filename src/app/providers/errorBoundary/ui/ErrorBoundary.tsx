import React, { type ErrorInfo, type ReactNode } from "react"
import { PageError } from "@/widgets/pageError"

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error)
    }

    render() {
        if (this.state.hasError) {
            return <PageError />
        }

        return this.props.children
    }
}
