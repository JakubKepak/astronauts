import styled from "styled-components";

export const MainContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
`;

export const DialogContainer = styled.div`
  z-index: 1000;
`;
