import * as S from "./Styles";

import Button from "../UI/Button";

export default function DeleteModal({ onClick, setDeleteModalActive }: any) {
  return (
    <S.MainContainer>
      <S.DialogContainer>
        <S.MessageContainer>
          <span>Eeesy! Are you sure?</span>
        </S.MessageContainer>
        <S.ButtonsContainer>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setDeleteModalActive(false)}
          >
            Naah
          </Button>
          <Button type="button" variant="warn" onClick={onClick}>
            Delete
          </Button>
        </S.ButtonsContainer>
      </S.DialogContainer>
    </S.MainContainer>
  );
}
