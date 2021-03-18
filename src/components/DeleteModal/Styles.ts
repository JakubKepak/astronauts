import styled from "styled-components";

export const MainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
`;

export const DialogContainer = styled.div`
  background-color: ${({ theme }) => theme.secondBackground};
  padding: 2rem;
  border-radius: var(--borderRadius);
  box-shadow: var(--Shadow);
  width: 70%;
  max-width: 250px;
`;

export const ButtonsContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MessageContainer = styled.div`
  text-align: center;
`;
