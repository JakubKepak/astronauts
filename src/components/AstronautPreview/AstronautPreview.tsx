import { useState } from "react";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import * as S from "./Styles";

import EditAstronaut from "../EditAstronaut/EditAstronaut";

interface Props {
  name: string;
  surname: string;
  birthDate: string;
  superpower: string;
  deleteItem: any;
  editItem: any;
  id: string;
}

export default function AstronautPreview({
  name,
  surname,
  birthDate,
  superpower,
  deleteItem,
  editItem,
  id,
}: Props) {
  const [editDialogActive, setEditDialogActive] = useState<boolean>(false);

  return (
    <S.MainComponent>
      {name}
      <S.EditIcon onClick={() => setEditDialogActive(true)} icon={faEdit} />
      <S.TrashBinIcon
        onClick={() => {
          deleteItem(id);
        }}
        icon={faTrashAlt}
      />
      {editDialogActive && (
        <EditAstronaut
          setEditDialogActive={setEditDialogActive}
          name={name}
          surname={surname}
          birthDate={birthDate}
          superpower={superpower}
          saveItem={editItem}
          variant="edit"
          id={id}
        />
      )}
    </S.MainComponent>
  );
}
