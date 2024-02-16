import React from 'react';
import {Route, Routes} from "react-router-dom";

import {routerConfig} from "@/shared/routeConfig";

export const AppRouter = () => {
    return (
        <Routes>
            {
                Object.values(routerConfig)
                    .map(({path, element}) => {
                        return <Route key={path} path={path} element={element}/>
                    })
            }
        </Routes>
    );
};
