import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import * as S from "./Styles";

import { db } from "../../firebase";

import AstronautPreview from "../AstronautPreview/AstronautPreview";
import EditAstronaut from "../EditAstronaut/EditAstronaut";
import Button from "../UI/Button";

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

      <S.OptionBarContainer>
        {status !== "saving" ? (
          <Button
            type="button"
            variant="primary"
            onClick={() => setCreateDialogActive(true)}
          >
            Add
          </Button>
        ) : (
          <div>Saving</div>
        )}
      </S.OptionBarContainer>

      <S.AstronautsContainer>
        <S.AstronautsLabelContainer>
          <span>Name</span>
          <span>Surname</span>
          <span>Date of birth</span>
          <span>Superpower</span>
        </S.AstronautsLabelContainer>
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
