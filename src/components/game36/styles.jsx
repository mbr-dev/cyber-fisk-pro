import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
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
    width: 700px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
      width: 500px;
    }
  }

  @media(min-width: 1024px) {
    width: 800px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media(max-width: 320px) {
    gap: 10px;
  }

  @media(min-width: 768px) {
    gap: 32px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 8px;
    }
  }

  @media(min-width: 1024px) {
    gap: 32px;
  }
`;

export const ButtonAudio = styled.button`
   all: unset;
  width: 132px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
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
    width: 100px;

    img {
      width: 42px;
    }

    .btn2 {
      width: 18px;
    }
  }

  @media(min-width: 768px) {
    width: 250px;
    height: 72px;
    gap: 24px;

    img {
      width: 100px;
    }

    .btn2 {
      width: 32px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 150px;
      height: 40px;
      gap: 16px;

      img {
        width: 50px;
      }

      .btn2 {
        width: 24px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 250px;
    height: 72px;
    gap: 24px;
    border-width: 3px;

    img {
      width: 100px;
    }

    .btn2 {
      width: 32px;
    }

    &:disabled {
      border-width: 3px;
    }
  }
`;

export const ButtonAnswer = styled.button`
   all: unset;
  width: 164px;
  height: 54px;
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
    font-size: 14px;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
    border: 2px solid ${props => props.theme["red-200"]};
  }  

  @media(max-width: 320px) {
    width: 132px;
    height: 52px;

    p {
      font-size: 12px;
    }
  }

  @media(min-width: 768px) {
    width: 300px;
    height: 80px;

    p {
      font-size: 20px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 150px;
      height: 38px;

      p {
        font-size: 12px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 300px;
    height: 80px;
    border-width: 3px;

    p {
      font-size: 20px;
    }

    &:disabled {
      border-width: 3px;
    }
  }
`;