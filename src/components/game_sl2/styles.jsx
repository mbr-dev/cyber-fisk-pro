import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p {
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme["gray-700"]};
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 90%;
    }
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;

  @media(max-width: 320px) {
    padding-inline: 0.5rem;
  }

  @media(min-width: 768px) {
    width: 30rem;
    gap: 1.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 50%;
    }
  }

  @media(min-width: 1024px) {
    width: 30rem;
    gap: 1.5rem;
  }
`;

export const Card = styled.button`
  all: unset;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;

  p {
    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;
  }

  img {
    width: 54px;
  }

  @media(max-width: 320px) {
    width: 3.5rem;
    height: 3.5rem;

    p {
      font-size: 0.5rem;
    }

    img {
      width: 36px;
    }
  }

  @media(min-width: 768px) {
    width: 6rem;
    height: 6rem;

    p {
      font-size: 1.125rem;
    }

    img {
      width: 64px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 3.5rem;
      height: 3.5rem;

      p {
        font-size: 0.75rem;
      }

      img {
        width: 42px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 6rem;
    height: 6rem;

    p {
      font-size: 1.125rem;
    }

    img {
      width: 54px;
    }
  }
`;

export const Icon = styled.img`
  width: 60%;
`;