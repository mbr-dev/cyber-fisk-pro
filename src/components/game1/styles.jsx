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
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  @media(max-width: 320px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  @media(min-width: 480px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 24px;
    gap: 54px;
  }
  
  @media(min-width: 1280px) {
    gap: 64px;
    margin-top: 44px;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 90px;
  height: 100px;
  display: flex;
  align-items: center;
  padding-inline: 1rem;
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

  p {
    line-height: 1.1;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
  }  

  @media(max-width: 320px) {
    width: 74px;
    height: 96px;
  }

  @media(min-width: 480px) {
    width: 72px;
    height: 94px;
  }

  @media(min-width: 1280px) {
    width: 120px;
    height: 150px;
  }
`;