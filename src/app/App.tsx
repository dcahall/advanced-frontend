import React, { type FC, Suspense, useEffect } from 'react'

import { Navbar } from "@/widgets/navbar"
import { Sidebar } from "@/widgets/sidebar"
import { PageLoader } from "@/widgets/pageLoader/ui/PageLoader"

import { useTheme } from "@/shared/themeProvider"
import { classNames } from '@/shared/lib/classNames/classNames'
import '@/shared/config/i18n/i18n'

import { AppRouter } from "./providers/router"
import { useDispatch } from "react-redux"
import { userActions } from "@/entities/user"

const App: FC = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <Suspense fallback=''>
            <div className={classNames('app', {}, [theme])}>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>

                    <div className='page-wrapper'>
                        <Suspense fallback={<PageLoader/>}>
                            <AppRouter/>
                        </Suspense>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default App
