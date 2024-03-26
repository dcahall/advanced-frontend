import React, { type FC, Suspense } from 'react'

import { Navbar } from "@/widgets/navbar"
import { Sidebar } from "@/widgets/sidebar"

import { useTheme } from "@/shared/themeProvider"
import { classNames } from '@/shared/lib/ClassNames'
import '@/shared/config/i18n/i18n'

import { AppRouter } from "./providers/router"

const App: FC = () => {
    const { theme } = useTheme()

    return (
        <Suspense fallback="">
            <div className={classNames('app', {}, [theme])}>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <div className='page-wrapper'>
                        <Suspense fallback='Loading'>
                            <AppRouter/>
                        </Suspense>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default App
