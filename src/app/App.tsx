import React, { type FC, Suspense, useState } from 'react'

import { Navbar } from "@/widgets/navbar"
import { Sidebar } from "@/widgets/sidebar"
import { PageLoader } from "@/widgets/pageLoader/ui/PageLoader"

import { useTheme } from "@/shared/themeProvider"
import { classNames } from '@/shared/lib/classNames/classNames'
import '@/shared/config/i18n/i18n'

import { AppRouter } from "./providers/router"
import { Modal } from "@/shared/ui/modal"

const App: FC = () => {
    const { theme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Suspense fallback=''>
            <div className={classNames('app', {}, [theme])}>
                <button onClick={() => { setIsOpen(prev => !prev) }}>toggle</button>
                <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda cumque distinctio iste pariatur quos. A aut beatae deserunt dolorum!
                </Modal>
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
