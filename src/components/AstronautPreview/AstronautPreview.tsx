import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Styles";

interface Props {
  name: string;
  surname?: string;
  birthDate?: string;
  superpower?: string;
}

export default function AstronautPreview({
  name,
  surname,
  birthDate,
  superpower,
}: Props) {
  return (
    <S.MainComponent>
      {name}
      <S.TrashBinIcon icon={faTrashAlt} />
    </S.MainComponent>
  );
}
