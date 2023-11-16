import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;

  @media(max-width: 360px) {
    margin-top: 24px;
    gap: 24px;
  }

  @media(max-width: 320px) {
    margin-top: 16px;
    gap: 16px;
  }

  @media(min-width: 768px) {
    margin-top: 32px;
    gap: 32;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 280px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;

  p {
    line-height: 1.1;
    font-size: 16px;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
  }  

  @media(max-width: 320px) {
    width: 210px;
    height: 56px;

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    width: 400px;
    height: 92px;

    p {
      font-size: 24px;
    }
  }

  @media(min-width: 1024px) {
    width: 550px;
    height: 104px;
  }
`;
