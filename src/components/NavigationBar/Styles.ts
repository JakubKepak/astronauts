import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 3rem;
  display: flex;
  justify-content: center;

  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.secondBackground};
`;

export const InnerContainer = styled.div`
  max-width: 1200px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  margin: 0.5rem 0;
  width: 50px;
`;

export const ToggleThemeContainer = styled.div``;
export const ToggleThemeContainerInner = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleThemeIcon = styled(FontAwesomeIcon)`
  width: 15px;
  height: 15px;
`;

export const ToggleButton = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  margin: 0 0.7rem;

  & input {
    opacity: 0;
  }

  & span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.primaryButton};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  & span:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.textColorWhite};
  }

  & input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
