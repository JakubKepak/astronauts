import * as S from "./Styles";

import logo from "../../assets/dog.svg";

export default function NavigationBar() {
  return (
    <S.MainContainer>
      <S.InnerContainer>
        <S.Logo src={logo} />
      </S.InnerContainer>
    </S.MainContainer>
  );
}
