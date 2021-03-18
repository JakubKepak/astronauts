import styled from "styled-components";

export const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  color: ${({ theme }) => theme.textColorPrimary};
`;

export const DialogContainer = styled.div`
  background-color: ${({ theme }) => theme.secondBackground};
  padding: 2rem;
  border-radius: var(--borderRadius);
  box-shadow: var(--Shadow);
`;

export const DialogHeader = styled.div`
  margin-bottom: 2rem;
`;

export const ButtonsContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabelContainer = styled.div`
  margin-bottom: 0.3rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: var(--fontSizeSmall);
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.textColorWarn};
`;

export const Label = styled.label``;

export const InputField = styled.input`
  color: inherit;
  padding: 0.5rem;
  min-width: 250px;
  border: 1px solid ${({ theme }) => theme.textColorLight};
  background: none;
  font-family: inherit;
`;
