import { createContext } from "react"

export enum Theme {
    DARK = 'app_dark_theme',
    LIGHT = 'app_light_theme',
}

export interface CreateContextProps {
    theme?: Theme
    setTheme?: (x: Theme) => void
}

export const ThemeContext = createContext<CreateContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
