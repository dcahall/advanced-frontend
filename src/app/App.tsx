import React, {Suspense} from 'react';

import {Navbar} from "@/widgets/navbar";
import {Sidebar} from "@/widgets/sidebar";

import {useTheme} from "@/shared/themeProvider";
import {classNames} from '@/shared/lib/ClassNames';

import {AppRouter} from "./providers/router";

const App = () => {
    const {theme} = useTheme()

    return (
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
    );
};

export default App;