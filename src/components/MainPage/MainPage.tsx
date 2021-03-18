import { useState, useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import * as S from "./Styles";

import { db } from "../../firebase";

import AstronautPreview from "../AstronautPreview/AstronautPreview";
import EditAstronaut from "../EditAstronaut/EditAstronaut";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../UI/Button";

export default function MainPage() {
  const [createDialogActive, setCreateDialogActive] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [data, status, error, saveItem, deleteItem, editItem] = useFetch(
    db.collection("astronauts")
  );

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    data &&
      setFilteredData(
        data.filter((astronaut: any) => astronaut.name.includes(searchKeyword))
      );
    console.log(searchKeyword);
  }, [searchKeyword, data]);

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
        <SearchBar setSearchKeyword={setSearchKeyword} />
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
        {filteredData && status === "success" && filteredData.length > 0 ? (
          filteredData.map((astronaut: any) => {
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
          })
        ) : (
          <div>Loading</div>
        )}
      </S.AstronautsContainer>
    </S.MainContainer>
  );
}
