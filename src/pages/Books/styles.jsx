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
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  p {
    font-size: 20px;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    width: 250px;

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    width: 620px;
  }

  @media(min-width: 1024px) {
    flex-direction: row;
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

  @media(min-width: 768px) {
    gap: 16px;

    p {
      font-size: 24px;
    }
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

  @media(min-width: 600px) {
    img {
      width: 160px;
    }
  }
`;

export const AreaFooter = styled.div`
  width: 300px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 250px;
    height: 52px;
  }

  @media(min-width: 768px) {
    width: 620px;
    height: 104px;
  }

  @media(min-width: 1024px) {
    width: 1000px;
    height: 120px;
    border-width: 4px;
  }

  @media(min-width: 1440px) {
    width: 1200px;
  }

  @media(min-width: 1920px) {
    width: 1600px;
  }
`;