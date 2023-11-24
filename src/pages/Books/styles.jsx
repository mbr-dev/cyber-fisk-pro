import styled from "styled-components";

export const Container = styled.div` 
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderMobile = styled.div`
  width: 100vw;
  height: 132px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  padding: 14px 14px 0 14px;
  border-end-end-radius: 18px;
  border-end-start-radius: 18px;
  overflow: hidden;
  position: relative;

  .bgHeaderImg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .logoFisk {
    width: 150px;
  }

  @media (max-width: 320px) {
    height: 110px;
    gap: 6px;

    .logoFisk {
      width: 120px;
    }
  }

  @media (min-width: 480px) {
    display: none;
  }
`;

export const HeaderMobileDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${props => props.theme.white};
    font-size: 20px;
    font-weight: 500;
  }

  @media (max-width: 320px) {
    p {
      font-size: 18px;
    }
  }
`;

export const DivDesk= styled.div`
  display: none;

  @media (min-width: 480px) {
    display: block;
  }
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

  @media(min-width: 480px) {
    width: 600px;
    flex-direction: row;
  }

  @media(min-width: 1280px) {
    width: 1000px;
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

  @media(min-width: 480px) {

    p {
      font-size: 16px;
    }
  }

  @media(min-width: 1280px) {
    gap: 16px;

    p {
      font-size: 32px;
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

  @media(min-width: 480px) {
    img {
      width: 80px;
    }
  }

  @media(min-width: 1280px) {
    img {
      width: 150px;
    }
  }
`;

export const DivLine = styled.div`
  width: 100%;

  @media (min-width: 480px) {
    display: none;
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

  @media(min-width: 480px) {
    width: 600px;
    height: 52px;
  }

  @media(min-width: 1280px) {
    width: 1000px;
    height: 120px;
    border-width: 4px;
  }
`;

export const ButtonHome = styled.button`
  all: unset;
  width: 250px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme["red-300"]};
  border-bottom-width: 3px;
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  p {
    font-size: 24px;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 320px) {
    width: 200px;
    height: 32px;

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 480px) {
    height: 32px;
    border-radius: 6px;

    p {
      font-size: 18px;
    }
  }

  @media(min-width: 1280px) {
    width: 400px;
    height: 56px;

    p {
      font-size: 32px;
    }
  }
`;