import { useState, useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import * as S from "./Styles";

import { db } from "../../firebase";

import AstronautPreview from "../AstronautPreview/AstronautPreview";
import EditAstronaut from "../EditAstronaut/EditAstronaut";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../UI/Loader";
import Button from "../UI/Button";

export default function MainPage() {
  const [createDialogActive, setCreateDialogActive] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<any>(undefined);
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
        data.filter(
          (astronaut: any) =>
            astronaut.name
              .toLowerCase()
              .includes(searchKeyword.toLowerCase()) ||
            astronaut.surname
              .toLowerCase()
              .includes(searchKeyword.toLowerCase()) ||
            astronaut.superpower
              .toLowerCase()
              .includes(searchKeyword.toLowerCase()) ||
            astronaut.birthDate
              .toLowerCase()
              .includes(searchKeyword.toLowerCase())
        )
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
          <span>Jméno</span>
          <span>Přijmení</span>
          <span>Datum narození</span>
          <span>Superschopnost</span>
        </S.AstronautsLabelContainer>
        {filteredData && status === "success" ? (
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
          <Loader />
        )}
        {filteredData && filteredData.length === 0 && (
          <div>Tady nikdo neni</div>
        )}
      </S.AstronautsContainer>
    </S.MainContainer>
  );
}
