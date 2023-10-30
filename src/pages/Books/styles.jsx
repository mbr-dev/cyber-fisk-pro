import styled from "styled-components";

export const Container = styled.div` 
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  flex: 1;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  p {
    font-size: 20px;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    p {
      font-size: 14px;
    }
  }
`;

export const BooksArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media(max-width: 320px) {
    gap: 8px;
  }
`;

export const BooksImage = styled.div`
  cursor: pointer;
  
  img {
    width: 30%;
  }

  @media(max-width: 320px) {
    img {
      width: 25%;
    }
  }
`;