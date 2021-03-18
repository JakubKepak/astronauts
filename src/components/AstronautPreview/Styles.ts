import styled from "styled-components";
import { device } from "../../breakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainContainer = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  min-width: 300px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.secondBackground};
  color: ${({ theme }) => theme.textColorPrimary};

  &:hover {
    border: 1px solid ${({ theme }) => theme.primaryButton};
    margin-top: -2px;
  }
`;

export const InnerContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 25%);

  @media ${device.sm} {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    grid-auto-flow: row;
  }
`;

export const FieldContainer = styled.div``;

export const FieldLabel = styled.span`
  color: ${({ theme }) => theme.textColorDarkLight};
  font-size: var(--fontSizeSmall);
  display: none;

  @media ${device.sm} {
    display: block;
  }
`;

export const OptionButtonContainer = styled.div`
  right: 5px;
  top: 5px;
  display: flex;
  opacity: 0;
  margin-left: 0.2rem;
  transition: all 0.2s;

  ${MainContainer}:hover & {
    opacity: 1;
  }

  @media ${device.sm} {
    opacity: 1;
  }
`;

export const TrashBinIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.textColorLight};
  transition: all 0.2s;
  margin-left: 0.3rem;

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
