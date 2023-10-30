import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background: ${props => props.theme["gradient-blue"]};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  h2 {
    color: ${props => props.theme.white};
    font-size: 2rem;
  }

  @media(max-width: 320px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const HeaderButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ButtonTip = styled.button`
  all: unset;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme['red-200']};
  border-radius: 6px;
  box-shadow: 0px 4px 10px 0px #00000040;
  color: ${props => props.theme.white};
  cursor: pointer;

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  position: relative;

  .roletaWheel {
    width: 100%;
    position: absolute;
    z-index: 1;
  }

  @media(min-width: 768px) {
    height: 45rem;

    .roletaWheel {
      width: 80%;
    }
  }
`;

export const WheelContainer = styled.div`
  transform: scale(0.85);
  position: absolute;
  top: 23px;
  right: 15px;
  z-index: 100;

  @media(min-width: 768px) {
    transform: scale(0.94);
    width: 450px;
    position: absolute;
    top: 60px;
    left: 122px;
  }

  @media(max-width: 360px) {
    top: 22px;
    right: 13px;
  }

  @media(max-width: 320px) {
    top: 20px;
    right: 11px;
  }
`;

export const ButtonStart = styled.button`
  all: unset;
  width: 4rem;
  height: 2.75rem;
  position: absolute;
  bottom: 6px;
  left: 98px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  color: ${props => props.theme.white};

  @media(min-width: 768px) {
    width: 6.5rem;
    height: 4rem;
    bottom: -24px;
    left: 155px;
  }

  @media(max-width: 428px) {
    width: 4rem;
    height: 2.75rem;
    bottom: -38px;
    left: 110px;
  }

  @media(max-width: 414px) {
    bottom: -24px;
    left: 106px;
  }

  @media(max-width: 412px) {
    bottom: -20px;
    left: 106px;
  }

  @media(max-width: 393px) {
    bottom: 3px;
    left: 100px;
  }

  @media(max-width: 375px) {
    bottom: 22px;
    left: 94px;
  }

  @media(max-width: 360px) {
    bottom: 36px;
    left: 89px;
  }

  @media(max-width: 320px) {
    bottom: -50px;
    left: 72px;
  }
`;