import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  @media(max-width: 320px) {
    margin-top: 0.5rem;
    gap: 0.5rem;
  }

  @media(min-width: 768px) {
    margin-top: 2rem;
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
      margin-top: 1rem;
      gap: 1rem;
    }
  }

  @media(min-width: 1024px) {
    margin-top: 2rem;
    gap: 2rem;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 16rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all ease 0.3s;
  text-align: center;

  p {
    font-size: 0.875rem;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
  }  

  @media(max-width: 320px) {
    width: 11rem;
    height: 3rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    width: 18.75rem;
    height: 5rem;

    p {
      font-size: 1.125rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 12rem;
      height: 3rem;

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 18.75rem;
    height: 5rem;

    p {
      font-size: 1.125rem;
    }
  }
`;