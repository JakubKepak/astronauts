import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainComponent = styled.div`
  padding: 1rem;
  width: 100%;
  min-width: 300px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.secondBackground};

  &:hover {
    border: 1px solid #7c5dfa;
  }
`;

export const TrashBinIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.textColorLight};
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.warningColor};
  }
`;
