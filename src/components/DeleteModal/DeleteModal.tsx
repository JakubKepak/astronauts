import { useEffect } from "react";
import * as S from "./Styles";

import Button from "../UI/Button";

export default function DeleteModal({ onClick, setDeleteModalActive }: any) {
  const closeOnEscape = (e: any) => {
    if (e.key === "Escape") {
      setDeleteModalActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => closeOnEscape(e));

    return () => {
      window.removeEventListener("keydown", (e) => closeOnEscape(e));
    };
  }, []);

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
