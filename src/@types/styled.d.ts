import 'styled-component';
import theme from 'src/theme';

declare module 'styled-component' {
    type themeType = typeof theme;

    export interface DefaultTheme extends themeType{}
}