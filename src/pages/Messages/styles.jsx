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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 24px;

  @media (max-width: 320px) {
    gap: 16px;
    padding-top: 16px;
  }

  @media (min-width: 768px) {
    gap: 36px;
    padding-top: 36px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 600px;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-top: 0.5rem;
      gap: 0.5rem;

      .composeBtn {
        width: 100%;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 24px;
    gap: 24px;

    .composeBtn {
      width: 100%;
    }
  }

  @media (min-width: 1366px) {
    padding-top: 32px;
    gap: 32px;
  }

  @media (min-width: 1920px) {
    padding-top: 48px;
    gap: 48px;
  }
`;

export const Div = styled.button`
  all: unset;
  width: 300px;
  height: 44px;
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

  @media (max-width: 320px) {
    width: 250px;
    height: 40px;

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    width: 500px;
    height: 72px;
    padding-inline: 1rem;

    p {
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 250px;
      height: 44px;
      padding-inline: 0.75rem;

      p {
        font-size: 1.25rem;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: 4rem;
    padding-inline: 1rem;

    p {
      font-size: 1.5rem;
    }
  }
`;

export const DivImg = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 8px;

  img {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 320px) {
    width: 1.75rem;
    height: 1.75rem;

    img {
      width: 16px;
      height: 16px;
    }
  }

  @media (min-width: 768px) {
    width: 3.25rem;
    height: 3.25rem;
    border-width: 3px;
    border-radius: 10px;

    img {
      width: 24px;
      height: 24px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 2rem;
      height: 2rem;
      border-width: 1px;

      img {
        width: 18px;
        height: 18px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 3.25rem;
    height: 3.25rem;
    border-width: 3px;
    border-radius: 10px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;