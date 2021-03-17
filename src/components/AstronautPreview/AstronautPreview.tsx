import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import * as S from "./Styles";

interface Props {
  name: string;
  surname?: string;
  birthDate?: string;
  superpower?: string;
  deleteItem: any;
  id: string;
}

export default function AstronautPreview({
  name,
  surname,
  birthDate,
  superpower,
  deleteItem,
  id,
}: Props) {
  return (
    <S.MainComponent>
      {name}
      <S.TrashBinIcon
        onClick={() => {
          deleteItem(id);
        }}
        icon={faTrashAlt}
      />
    </S.MainComponent>
  );
}
