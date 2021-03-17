import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mainBackground: string;
    secondBackground: string;
    textColorPrimary: string;
    textColorLight: string;
    warningColor: string;
  }
}
