import React, { memo, useMemo } from 'react'
import { Route, Routes } from "react-router-dom"

import { routerConfig } from "@/shared/config/router"
import { getUserAuthData } from "@/entities/user"
import { useSelector } from "react-redux"

export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData)

    const routes = useMemo(() => {
        return Object.values(routerConfig)
            .filter(({ isAuthOnly }) => {
                if (isAuthOnly && !isAuth) { return false }

                return true
            })
            .map(({ path, element }) => {
                return <Route key={path} path={path} element={element}/>
            })
    }, [isAuth])

    return (
        <Routes>
            {routes}
        </Routes>
    )
})
