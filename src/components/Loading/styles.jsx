import { styled } from "styled-components";

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff7b;
  position: absolute;
  z-index: 1000;

  img {
    width: 180px;
  }

  @media(min-width: 960px) {
    img {
      width: 480px;
    }
  }
`;