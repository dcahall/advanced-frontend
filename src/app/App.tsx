import React, {Suspense} from 'react';

import {Navbar} from "@/widgets/navbar";

import {useTheme} from "@/shared/themeProvider";
import {classNames} from '@/shared/lib/ClassNames';

import {AppRouter} from "./providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>сменить тему</button>
            <Suspense fallback='Loading'>
                <AppRouter/>
            </Suspense>
        </div>
    );
};

export default App;