import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import * as S from "./Styles";

import { db } from "../../firebase";

import AstronautPreview from "../AstronautPreview/AstronautPreview";
import EditAstronaut from "../EditAstronaut/EditAstronaut";

export default function MainPage() {
  const [createDialogActive, setCreateDialogActive] = useState<boolean>(false);
  const [data, status, error, saveItem, deleteItem, editItem] = useFetch(
    db.collection("astronauts")
  );

  return (
    <S.MainContainer>
      {createDialogActive && (
        <EditAstronaut
          setEditDialogActive={setCreateDialogActive}
          saveItem={saveItem}
          variant="new"
        />
      )}

      <S.AstronautsContainer>
        {status !== "saving" ? (
          <button onClick={() => setCreateDialogActive(true)}>Add</button>
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
                editItem={editItem}
                key={astronaut.id}
                name={astronaut.name}
                surname={astronaut.surname}
                birthDate={astronaut.birthDate}
                superpower={astronaut.superpower}
              />
            );
          })}
      </S.AstronautsContainer>
    </S.MainContainer>
  );
}
