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
  height: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 0 1rem;
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
    width: 132px;
  }

  @media (max-width: 320px) {
    height: 6.25rem;

    .logoFisk {
      width: 110px;
    }
  }

  @media (max-width: 768px) {
    height: 9.375rem;

    .logoFisk {
      width: 150px;
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
  align-items: center;
  justify-content: space-between;

  p {
    color: ${props => props.theme.white};
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media (max-width: 320px) {
    p {
      font-size: 1.25rem;
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
  padding-top: 2rem;
  gap: 2rem;

  p {
    font-size: 1.25rem;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    padding-top: 0.625rem;
    gap: 0.625rem;
    width: 15.625rem;

    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 768px) {
    width: 37rem;
    padding-top: 2.5rem;
    gap: 2.5rem;
    align-items: flex-start;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 700px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding-top: 0rem;
    }
  }

  @media(min-width: 1280px) {
    width: 1200px;
  }
`;

export const BooksArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(min-width: 768px) {
    width: 100%;

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      p {
        font-size: 1.125rem;
      }
    }
  }

  @media(min-width: 1280px) {
    p {
      font-size: 2rem;
    }
  }
`;

export const BooksInside = styled.div`
  width: 100%;
  height: 7.5rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 320px) {
    height: 6.25rem;
  }

  @media (min-width: 768px) {
    height: 10.5rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 7.5rem;
    }
  }

  @media (min-width: 1280px) {
    height: 12.5rem;
  }
`;

export const BooksImage = styled.div`
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
  }

  @media(min-width: 1280px) {
    img {
      width: 150px;
    }
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

export const AreaFooter = styled.div`
  width: 18.75rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 15.625rem;
    height: 3.25rem;
  }

  @media(min-width: 768px) {
    width: 37.5rem;
    height: 5.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 37.5rem;
      height: 3.25rem;
    }
  }

  @media(min-width: 1280px) {
    width: 75rem;
    height: 6.25rem;
    border-width: 4px;
  }
`;

export const ButtonHome = styled.button`
  all: unset;
  width: 15.625rem;
  height: 2.25rem;
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
    width: 12.5rem;
    height: 2rem;

    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 768px) {
    width: 25rem;
    height: 2.75rem;

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 782px) {
      width: 15.625rem;
      height: 2rem;
      border-radius: 6px;

      p {
        font-size: 1.125rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 25rem;
    height: 2.75rem;

    p {
      font-size: 2rem;
    }
  }
`;