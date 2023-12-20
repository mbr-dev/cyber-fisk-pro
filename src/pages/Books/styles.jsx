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
  height: 120px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-end-end-radius: 18px;
  border-end-start-radius: 18px;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
  
  .logoFisk {
    width: 132px;
  }

  @media (max-width: 320px) {
    height: 100px;

    .logoFisk {
      width: 116px;
    }
  }

  @media (min-width: 768px) {
    height: 150px;

    .logoFisk {
      width: 164px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      display: none;
    }
  }
`;

export const HeaderMobileDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  p {
    color: ${props => props.theme.white};
    font-size: 24px;
    font-weight: 500;
  }

  @media (max-width: 320px) {
    p {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 36px;
    }
  }
`;

export const DivDesk= styled.div`
  display: none;

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      display: block;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
  gap: 16px;

  p {
    font-size: 18px;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    padding-top: 10px;
    gap: 10px;
    width: 15.625rem;

    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 768px) {
    width: 550px;
    padding-top: 32px;
    gap: 32px;
    align-items: flex-start;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 600px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 0px;
      padding-top: 0rem;
    }
  }

  @media(min-width: 1024px) {
    width: 800px;
  }

  @media(min-width: 1366px) {
    width: 1000px;
  }
  
  @media(min-width: 1920px) {
    width: 1300px;
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
    width: 100%;

    p {
      font-size: 32px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 4px;

      p {
        font-size: 16px;
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 16px;

    p {
      font-size: 28px;
    }
  }

  @media(min-width: 1366px) {
    gap: 24px;

    p {
      font-size: 32px;
    }
  }
`;

export const BooksInside = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 320px) {
    height: 100px;
  }

  @media (min-width: 768px) {
    height: 160px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 120px;
    }
  }

  @media (min-width: 1024px) {
    height: 160px;
  }

  @media (min-width: 1366px) {
    height: 200px;
  }
`;

export const BooksImage = styled.div`
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

export const DivLine = styled.div`
  width: 100%;

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      display: none;
    }
  }
`;