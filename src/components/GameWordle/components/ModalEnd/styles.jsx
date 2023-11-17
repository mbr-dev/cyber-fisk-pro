import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  position: absolute;
  top: 250px;
  left: 60px;
  z-index: 1000;

  @media(max-width: 428px) {
    left: 84px;
  }

  @media(max-width: 414px) {
    left: 78px;
  }

  @media(max-width: 412px) {
    left: 72px;
  }

  @media(max-width: 375px) {
    top: 240px;
    left: 50px;
  }

  @media(max-width: 360px) {
    top: 230px;
    left: 46px;
  }

  @media(max-width: 320px) {
    top: 170px;
    left: 56px;
  }

  @media(min-width: 768px) {
    top: 380px;
    left: 206px;
    gap: 10px;
  }

  @media(min-width: 1024px) {
    top: 390px;
    left: 750px;
    gap: 16px;
  }

  @media(min-width: 1440px) {
    top: 480px;
    left: 828px;
  }

  @media(min-width: 1920px) {
    top: 500px;
    left: 1076px;
  }
`;

export const Letter = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${props => props.theme["green-500"]};
  border: 3px solid ${props => props.theme["green-400"]};
  color: ${props => props.theme.white};
  box-shadow: 0px 6px 100px 0px #95BC10;
  font-size: 32px;

  @media(max-width: 320px) {
    width: 36px;
    height: 36px;
    font-size: 24px;
  }

  @media(min-width: 768px) {
    width: 64px;
    height: 64px;
    font-size: 36px;
  }

  @media(min-width: 1024px) {
    width: 76px;
    height: 76px;
    font-size: 36px;
  }
`;