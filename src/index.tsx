import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'

import '@/app/styles/index.scss'
import App from '@/app/App'

import { ThemeProvider } from '@/shared/themeProvider'
import { ErrorBoundary } from "@/app/providers/errorBoundary"
import { StoreProvider } from "@/app/providers/store"

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
