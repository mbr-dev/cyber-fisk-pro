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
  gap: 24px;
  padding-top: 24px;

  @media (max-width: 320px) {
    gap: 20px;
    padding-top: 20px;
  }

  @media (min-width: 768px) {
    gap: 36px;
    padding-top: 36px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      padding-top: 20px;
      gap: 20px;
    }
  }

  @media (min-width: 1024px) {
    gap: 36px;
    padding-top: 36px;
  }

  @media (min-width: 1366px) {
    gap: 48px;
    padding-top: 48px;
  }
`;

export const Div = styled.button`
  all: unset;
  width: 300px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 0.75rem;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;

  p {
    font-size: 20px;
    font-weight: 700;
  }

  img {
    width: 18px;
  }

  @media (max-width: 320px) {
    width: 250px;
    height: 42px;

    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    width: 500px;
    height: 84px;
    padding-inline: 24px;

    p {
      font-size: 32px;
    }

    img {
      width: 32px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 400px;
      height: 48px;

      p {
        font-size: 20px;
      }

      img {
        width: 24px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 600px;
    height: 84px;
    padding-inline: 24px;
    border-width: 3px;

    p {
      font-size: 32px;
    }

    img {
      width: 32px;
    }
  }

  @media (min-width: 1366px) {
    width: 800px;
    height: 92px;
    padding-inline: 32px;

    p {
      font-size: 36px;
    }

    img {
      width: 36px;
    }
  }
`;