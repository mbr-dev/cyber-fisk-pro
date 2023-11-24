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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  @media(max-width: 360px) {
    gap: 1rem;
    margin-top: 1rem;
  }

  @media(min-width: 600px) {
    margin-top: 54px;
    gap: 44px;
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
  padding-inline: 8px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;

  p {
    line-height: 1.1;
    font-size: 14px;
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
  }

  @media(min-width: 1280px) {
    width: 500px;
    height: 86px;
  }
`;