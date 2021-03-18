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
          <span>Whhoa! Jsi si jistý?</span>
        </S.MessageContainer>
        <S.ButtonsContainer>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setDeleteModalActive(false)}
          >
            Nejsem
          </Button>
          <Button type="button" variant="warn" onClick={onClick}>
            Smaž to.
          </Button>
        </S.ButtonsContainer>
      </S.DialogContainer>
    </S.MainContainer>
  );
}
