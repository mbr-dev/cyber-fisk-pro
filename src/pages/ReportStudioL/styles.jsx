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
  gap: 7.5rem;
  padding-top: 6.25rem;

  @media (max-width: 320px) {
    gap: 2rem;
  }

  @media (min-width: 768px) {
    padding-top: 10rem;
    gap: 3.375rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      padding-top: 0.625rem;
      gap: 2rem;
    }
  }

  @media (min-width: 1280px) {
    padding-top: 0px;
    gap: 3.375rem;
    justify-content: center;
  }
`;

export const DivInside = styled.div`
  width: 4.25rem;
  height: 4.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${props => props.theme["red-200"]};
  transition: all ease 0.3s;

  span {
    font-size: 1.75rem;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    width: 8.875rem;
    height: 8.875rem;
    border-width: 3px;

    span {
      font-size: 2rem;
    }

    p {
      font-size: 1.375rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 4rem;
      height: 4rem;
      border-width: 1px;

      span {
        font-size: 1.25rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1280px) {
    width: 8.875rem;
    height: 8.875rem;
    border-width: 3px;

    span {
      font-size: 2rem;
    }

    p {
      font-size: 1.375rem;
    }
  }
`;

export const ButtonRec = styled.button`
  all: unset;
  width: 13rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;

  img {
    height: 24px;
  }

  .ruido {
    width: 70%;
  }

  &:hover {
    scale: 1.05;
  }

  @media(max-width: 320px) {
    width: 13rem;
    height: 3rem;

    img {
      width: 1.125rem;
    }
  }

  @media(min-width: 768px) {
    width: 26.25rem;
    height: 4.5rem;
    gap: 1rem;

    img {
      width: 54px;
      height: 42px;
    }

    .ruido {
      width: 220px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 12.5rem;
      height: 4rem;
      gap: 10px;

      img {
        width: 32px;
        height: 32px;
      }

      .ruido {
        width: 120px;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 26.25rem;
    height: 4.5rem;
    gap: 1rem;

    img {
      width: 54px;
      height: 42px;
    }

    .ruido {
      width: 220px;
    }
  }
`;