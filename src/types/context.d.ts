import { Colors } from "@utils/constants"

type ThemeColors = typeof Colors;

type ThemeState = 'light' | 'dark'

type ThemeContextType = {
    theme: ThemeState
    themeColors: ThemeColors;
    toggleTheme: CallBackWithParams<void, ThemeState>
    switchTheme: VoidCallBack;
}

export type ThemeProviderProps = {
    children: ReactNode;
};