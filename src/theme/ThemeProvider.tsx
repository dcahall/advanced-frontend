import {FC, useMemo, useState} from "react";

import {ThemeContext, LOCAL_STORAGE_THEME_KEY, Theme} from "./ThemeContext";

const initTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(initTheme)

    const defaultProps = useMemo(() => {
        return {
            theme,
            setTheme
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}