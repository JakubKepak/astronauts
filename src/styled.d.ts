import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mainBackground: string;
    secondBackground: string;
    textColorPrimary: string;
    textColorLight: string;
    warningColor: string;
    primaryButton: string;
    textColorWhite: string;
    primaryButtonHover: string;
    secondaryButton: string;
    secondaryButtonHover: string;
    textColorWarn: string;
  }
}
