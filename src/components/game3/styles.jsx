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
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 16px;

  @media(max-width: 320px) {
    margin-top: 10px;
    gap: 10px;
  }

  @media(min-width: 768px) {
    margin-top: 24px;
    gap: 24px;
  }
  
  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
      justify-content: center;
      gap: 24px;
      margin-top: 16px;
    }
  }
  
  @media(min-width: 1024px) {
    margin-top: 24px;
    gap: 24px;
  }

  @media(min-width: 1366px) {
    margin-top: 32px;
    gap: 52px;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 280px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all ease 0.3s;
  text-align: center;

  p {
    font-size: 16px;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media(max-width: 360px) {
    width: 250px;
    height: 58px;
  }

  @media(max-width: 320px) {
    width: 200px;
    height: 48px;

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    width: 300px;
    height: 76px;

    p {
      font-size: 20px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 200px;
      height: 48px;

      p {
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 290px;
    height: 76px;

    p {
      font-size: 20px;
    }
  }
`;
