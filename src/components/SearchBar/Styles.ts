import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  border: 1px solid ${({ theme }) => theme.textColorDarkLight};
  border-radius: var(--borderRadius);
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.textColorDarkLight}; ;
`;

export const InputField = styled.input`
  margin-left: 0.5rem;
  border: none;
  background: none;
  font-family: inherit;
`;
