import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
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
  gap: 16px;

  @media(max-width: 320px) {
    gap: 8px;
  }

  @media(min-width: 768px) {
    gap: 32px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
      gap: 0;
    }
  }
`;

export const Image = styled.div`
  width: 280px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  @media(max-width: 320px) {
    width: 232px;
    height: 120px;
  }

  @media(min-width: 768px) {
    width: 420px;
    height: 250px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 280px;
      height: 150px
    }
  }

  @media(min-width: 1024px) {
    width: 420px;
    height: 250px;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media(max-width: 320px) {
    gap: 8px;
  }

  @media(min-width: 768px) {
    gap: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 40%;
      gap: 8px;
    }
  }

  @media(min-width: 1024px) {
    gap: 24px;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 250px;
  height: 58px;
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
    font-size: 14px;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
  }  

  @media(max-width: 320px) {
    width: 200px;
    height: 44px;

    p {
      font-size: 12px;
    }
  }

  @media(min-width: 768px) {
    width: 400px;
    height: 84px;

    p {
      font-size: 20px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 200px;
      height: 44px;

      p {
        font-size: 12px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 380px;
    height: 84px;
    border-width: 3px;

    p {
      font-size: 20px;
    }
  }
`;