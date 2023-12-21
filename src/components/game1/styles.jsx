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
  gap: 16px;
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
      gap: 32px;
      margin-top: 16px;
      flex-direction: row;
      justify-content: center;
    }
  }
  
  @media(min-width: 1024px) {
    margin-top: 24px;
    gap: 48px;
  }

  @media(min-width: 1366px) {
    margin-top: 32px;
    gap: 52px;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 100px;
  height: 110px;
  display: flex;
  align-items: center;
  padding-inline: 16px;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;

  img {
    width: 100%;
    height: 80%;
    object-fit: contain;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
  }  

  @media(max-width: 320px) {
    width: 68px;
    height: 68px;
    padding-inline: 8px;
  }

  @media(min-width: 768px) {
    width: 150px;
    height: 164px;
    padding-inline: 16px;
    border-radius: 12px
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 72px;
      height: 84px;
      padding-inline: 8px;
      border-radius: 8px;
    }
  }

  @media(min-width: 1024px) {
    width: 150px;
    height: 164px;
    padding-inline: 16px;
    border-radius: 12px
  }
`;