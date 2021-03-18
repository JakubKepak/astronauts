import styled from "styled-components";
import { device } from "../../breakpoints";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AstronautsContainer = styled.div`
  width: 90%;
  min-width: 350px;
  max-width: 800px;
  height: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-gap: 1rem;
`;

export const AstronautsLabelContainer = styled.div`
  width: 97%;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(4, 25%);

  @media ${device.sm} {
    display: none;
  }
`;

export const OptionBarContainer = styled.div`
  width: 90%;
  min-width: 350px;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
`;
