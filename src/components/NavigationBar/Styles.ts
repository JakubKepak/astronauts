import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 3rem;

  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.secondBackground};
`;
