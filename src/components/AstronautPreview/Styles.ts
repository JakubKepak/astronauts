import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainContainer = styled.div`
  display: flex;
`;

export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  padding: 1rem;
  width: 100%;
  min-width: 300px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.secondBackground};

  &:hover {
    border: 1px solid ${({ theme }) => theme.primaryButton};
    margin-top: -2px;
  }
`;

export const OptionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.2rem 0;
  margin-left: 0.2rem;
`;

export const TrashBinIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.textColorLight};
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.textColorWarn};
  }
`;

export const EditIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.textColorLight};
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.textColorPrimary};
  }
`;
