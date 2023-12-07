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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1.5rem;

  @media (max-width: 320px) {
    gap: 1.25rem;
    padding-top: 1.25rem;
  }

  @media (min-width: 768px) {
    gap: 2.25rem;
    padding-top: 2.25rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      padding-top: 1rem;
      gap: 1rem;
    }
  }

  @media (min-width: 1280px) {
    gap: 2.25rem;
    padding-top: 2.25rem;
  }
`;

export const Div = styled.button`
  all: unset;
  width: 18.75rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 0.75rem;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;

  p {
    font-size: 1.125rem;
    font-weight: 700;
  }

  img {
    width: 18px;
  }

  @media (max-width: 320px) {
    width: 15.625rem;
    height: 2.5rem;

    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    width: 37.5rem;
    height: 4rem;
    padding-inline: 1rem;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 37.5rem;
      height: 3rem;
    }
  }

  @media (min-width: 1280px) {
    height: 4rem;
    padding-inline: 1rem;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 1.5rem;
    }
  }
`;