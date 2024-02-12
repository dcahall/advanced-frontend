import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import {MainPageAsync} from "./pages/mainPage/MainPage.async";
import {AboutPageAsync} from "./pages/aboutPage/AboutPage.async";

import {useTheme} from "./theme/useContext";
import {Theme} from "./theme/ThemeContext";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`} >
            <button onClick={toggleTheme}>сменить тему</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback='Loading'>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync/>}/>
                    <Route path='/' element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;