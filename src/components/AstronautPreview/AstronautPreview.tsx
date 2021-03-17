import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import * as S from "./Styles";

interface Props {
  name: string;
  surname?: string;
  birthDate?: string;
  superpower?: string;
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
  return (
    <S.MainComponent>
      {name}
      <S.EditIcon icon={faEdit} />
      <S.TrashBinIcon
        onClick={() => {
          deleteItem(id);
        }}
        icon={faTrashAlt}
      />
    </S.MainComponent>
  );
}
