import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media(min-width: 768px) {
    width: 40rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
      width: 40rem;
    }
  }

  @media(min-width: 1280px) {
    width: 60rem;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(min-width: 768px) {
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 1rem;
    }
  }

  @media(min-width: 1280px) {
    gap: 2rem;
  }
`;

export const ButtonAudio = styled.button`
  all: unset;
  width: 8rem;
  height: 2.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;

  &:hover {
    scale: 1.05;
  }

  img {
    width: 50px;
  }

  .btn2 {
    width: 24px;
  }

  &:disabled {
    cursor: not-allowed;
    border: 2px solid ${props => props.theme["red-200"]};
  }

  @media(max-width: 320px) {
    width: 7rem;
  }

  @media(min-width: 768px) {
    width: 16rem;
    height: 4.5rem;
    gap: 32px;

    img {
      width: 100px;
    }

    .btn2 {
      width: 32px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 10rem;
      height: 2.5rem;
      gap: 1rem;

      img {
        width: 50px;
      }

      .btn2 {
        width: 24px;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 18rem;
    height: 5rem;
    gap: 32px;

    img {
      width: 120px;
    }

    .btn2 {
      width: 36px;
    }
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 11rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  padding-inline: 8px;
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
    width: 8rem;
    height: 3.5rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    width: 18rem;
    height: 5rem;

    p {
      font-size: 1.25rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 12rem;
      height: 2.5rem;

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 18rem;
    height: 5rem;

    p {
      font-size: 1.25rem;
    }
  }
`;