import { useState } from "react";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import * as S from "./Styles";

import EditAstronaut from "../EditAstronaut/EditAstronaut";
import DeleteModal from "../DeleteModal/DeleteModal";

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
  const [deleteModalActive, setDeleteModalActive] = useState<boolean>(false);

  return (
    <S.MainContainer>
      <S.InnerContainer>
        <S.FieldContainer>
          <S.FieldLabel>Jméno</S.FieldLabel>
          <span>{name}</span>
        </S.FieldContainer>
        <S.FieldContainer>
          <S.FieldLabel>Příjmení</S.FieldLabel>
          <span>{surname}</span>
        </S.FieldContainer>
        <S.FieldContainer>
          <S.FieldLabel>Datum narození</S.FieldLabel>
          <span>{birthDate}</span>
        </S.FieldContainer>
        <S.FieldContainer>
          <S.FieldLabel>Superschopnost</S.FieldLabel>
          <span>{superpower}</span>
        </S.FieldContainer>
      </S.InnerContainer>
      <S.OptionButtonContainer>
        <S.EditIcon onClick={() => setEditDialogActive(true)} icon={faEdit} />
        <S.TrashBinIcon
          onClick={() => {
            setDeleteModalActive(true);
          }}
          icon={faTrashAlt}
        />
      </S.OptionButtonContainer>
      {deleteModalActive && (
        <DeleteModal
          setDeleteModalActive={setDeleteModalActive}
          onClick={() => deleteItem(id)}
        />
      )}
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
    </S.MainContainer>
  );
}
