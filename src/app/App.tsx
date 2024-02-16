import React, {Suspense} from 'react';
import {Link} from 'react-router-dom';

import {useTheme} from "@/shared/themeProvider";
import {classNames} from '@/shared/lib/ClassNames';

import {AppRouter} from "./providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>сменить тему</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback='Loading'>
                <AppRouter/>
            </Suspense>
        </div>
    );
};

export default App;