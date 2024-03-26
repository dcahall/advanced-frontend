import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'

import '@/app/styles/index.scss'
import App from '@/app/App'

import { ThemeProvider } from '@/shared/themeProvider'

render(
    <ThemeProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
)
