import * as S from "./Styles";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ setSearchKeyword }: any) {
  const setSearchKeywordHandler = (e: any) => {
    setSearchKeyword(e.target.value);
    console.log(e.target.value);
  };

  return (
    <S.MainContainer>
      <S.SearchIcon icon={faSearch} />
      <S.InputField
        placeholder="Tik tak. Začni hledat..."
        onChange={(e) => setSearchKeywordHandler(e)}
      />
    </S.MainContainer>
  );
}
