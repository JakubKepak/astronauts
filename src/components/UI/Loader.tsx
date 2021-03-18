import styled from "styled-components";

import Spinner from "../../assets/Spinner.svg";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderImage = styled.img`
  width: 100px;
`;

export default function Loader() {
  return (
    <MainContainer>
      <LoaderImage src={Spinner}></LoaderImage>
    </MainContainer>
  );
}
