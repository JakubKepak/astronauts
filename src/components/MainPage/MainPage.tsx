import useFetch from "../../Hooks/useFetch";
import * as S from "./Styles";

import { db } from "../../firebase";

import AstronautPreview from "../AstronautPreview/AstronautPreview";

export default function MainPage() {
  const [data, status, error, saveItem, deleteItem] = useFetch(
    db.collection("astronauts")
  );

  return (
    <S.MainContainer>
      <S.AstronautsContainer>
        {status !== "saving" ? (
          <button
            onClick={() =>
              saveItem({
                name: "Jarda",
                surname: "Button",
                birthDate: "23/1/1990",
                superpower: "Cat",
              })
            }
          >
            Add
          </button>
        ) : (
          <div>Saving</div>
        )}
        {status === "success" &&
          data.length > 0 &&
          data.map((astronaut: any) => {
            return (
              <AstronautPreview
                id={astronaut.id}
                deleteItem={deleteItem}
                key={astronaut.id}
                name={astronaut.name}
              />
            );
          })}
      </S.AstronautsContainer>
    </S.MainContainer>
  );
}
