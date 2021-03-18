import * as S from "./Styles";

import { faCloudSun, faCloudMoon } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/dog.svg";

interface Props {
  toggleThemes: (isDarkTheme: boolean) => void;
}

export default function NavigationBar({ toggleThemes }: Props) {
  return (
    <S.MainContainer>
      <S.InnerContainer>
        <S.Logo src={logo} />
        <S.ToggleThemeContainer>
          <S.ToggleThemeContainerInner>
            <S.ToggleThemeIcon icon={faCloudSun} />
            <S.ToggleButton>
              <input
                type="checkbox"
                onChange={(e) => toggleThemes(e.target.checked)}
              />
              <span></span>
            </S.ToggleButton>
            <S.ToggleThemeIcon icon={faCloudMoon} />
          </S.ToggleThemeContainerInner>
        </S.ToggleThemeContainer>
      </S.InnerContainer>
    </S.MainContainer>
  );
}
