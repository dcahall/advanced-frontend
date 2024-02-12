import {createContext} from "react";

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

export interface CreateContextProps {
    theme?: Theme
    setTheme?: (x: Theme) => void
}

export const ThemeContext =  createContext<CreateContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'