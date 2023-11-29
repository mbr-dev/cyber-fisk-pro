import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.75rem;
  }

  @media(min-width: 600px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const Image = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 250px;
    height: 184px;
    object-fit: fill;
  }

  @media(max-width: 320px) {
    img {
      width: 200px;
      height: 120px;
    }
  }

  @media(min-width: 600px) {
    width: 40%;

    img {
      width: 250px;
      height: 184px;
    }
  }

  @media(min-width: 1280px) {
    img {
      width: 400px;
      height: 250px;
    }
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(min-width: 600px) {
    width: 40%;
    gap: 0.5rem;
  }

  @media(min-width: 1280px) {
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
    font-size: 1rem;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
  }  

  @media(max-width: 320px) {
    width: 13rem;
    height: 3rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 600px) {
    width: 12rem;
    height: 3rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 1280px) {
    width: 18.75rem;
    height: 5rem;

    p {
      font-size: 1.25rem;
    }
  }
`;