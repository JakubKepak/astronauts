import styled from "styled-components";

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
