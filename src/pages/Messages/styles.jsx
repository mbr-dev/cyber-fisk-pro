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
    gap: 0.75rem;
    padding-top: 0.75rem;
  }

  @media (min-width: 768px) {
    gap: 2.25rem;
    padding-top: 2.25rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 80%;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0;
      padding-top: 0rem;

      .composeBtn {
        width: 100%;
      }
    }
  }

  @media (min-width: 1280px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.5rem;
    padding-top: 2rem;

    .composeBtn {
      width: 37.5rem;
    }
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
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 18.75rem;
      height: 2.75rem;
      padding-inline: 0.75rem;

      p {
        font-size: 1.25rem;
      }
    }
  }

  @media (min-width: 1280px) {
    width: 37.5rem;
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

  @media (min-width: 1280px) {
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