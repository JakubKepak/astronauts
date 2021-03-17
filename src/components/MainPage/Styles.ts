import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AstronautsContainer = styled.div`
  width: 60%;
  min-width: 300px;
  margin-top: 2rem;
  display: grid;
  grid-gap: 1rem;
`;

export const AstronautsLabelContainer = styled.div`
  width: 97%;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(4, 25%);
`;
