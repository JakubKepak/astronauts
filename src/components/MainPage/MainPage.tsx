import useFetch from "../../Hooks/useFetch";
import * as S from "./Styles";

import { db } from "../../firebase";

import AstronautPreview from "../AstronautPreview/AstronautPreview";

export default function MainPage() {
  const [data, status, error] = useFetch(db.collection("astronauts"));

  return (
    <S.MainContainer>
      <S.AstronautsContainer>
        {status === "success" &&
          data.length > 0 &&
          data.map((astronaut: any) => {
            return (
              <AstronautPreview key={astronaut.id} name={astronaut.name} />
            );
          })}
      </S.AstronautsContainer>
    </S.MainContainer>
  );
}
