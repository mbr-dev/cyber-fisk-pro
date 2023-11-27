import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100vw;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  border-end-end-radius: 18px;
  border-end-start-radius: 18px;
  overflow: hidden;
  position: relative;

  .bgHeaderImg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  @media(max-width: 320px) {
    height: 120px;
    gap: 6px;
  }

  @media(min-width: 480px) {
    height: 64px;
    justify-content: center;
    gap: 0px;
  }

  @media(min-width: 1280px) {
    height: 100px;
    gap: 0px;
  }
`;

export const HeaderTop = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px;
  padding-top: 16px;

  .logoFiskD {
    display: none;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    font-size: 18px;
    padding-inline: 12px;
    padding-top: 12px;
  }

  @media(min-width: 480px) {
    padding-top: 0px;

    .logoFiskD {
      display: block;
      width: 80px;
      margin-left: -250px;
    }

    p {
      font-size: 28px;
      margin-left: -100px;
    }
  }

  @media(min-width: 1280px) {
    .logoFiskD {
      width: 100px;
      margin-left: -480px;
    }

    p {
      font-size: 32px;
      margin-left: -100px;
    }
  }

  @media(min-width: 1920px) {
    .logoFiskD {
      width: 100px;
      margin-left: -800px;
    }
  }
`;

export const HeaderBottom = styled.header`
  display: flex;
  align-items: center;
  
  .logoFisk {
    width: 164px;
  }

  @media (min-width: 480px) {
    .logoFisk {
      display: none;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media(max-width: 360px) {
    gap: 14px
  }

  @media(max-width: 320px) {
    gap: 8px;
    padding-block: 10px;
  }

  @media(min-width: 480px) {
    width: 580px;
    gap: 0;
    flex-direction: row;
    justify-content: space-between;
  }

  @media(min-width: 1280px) {
    width: 1000px;
    gap: 0;
    
    padding-block: 0;
  }
`;

export const ButtonAreaTop = styled.div`
  width: 100%;
  height: 208px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media(max-width: 360px) {
    height: 196px;
  }

  @media(max-width: 320px) {
    width: 250px;
    height: 128px;
  }

  @media(min-width: 480px) {
    width: 250px;
    height: 200px;
  }

  @media(min-width: 1280px) {
    width: 450px;
    height: 350px;
    gap: 0;
  }
`;

export const DivRight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ButtonTask = styled.button`
  all: unset;
  width: 110px;
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;
  cursor: pointer;

  img {
    width: 42px;
  }

  p {
    font-size: 18px;
    font-weight: 500;
  }

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border-color: ${props => props.theme.black};
  }

  @media(max-width: 360px) {
    height: 86px;

    img {
      width: 36px;
    }

    p {
      font-size: 16px;
    }
  }

  @media(max-width: 320px) {
    width: 96px;
    height: 56px;

    img {
      width: 24px;
    }

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 480px) {
    width: 86px;
    height: 92px;
    gap: 4px;

    img {
      width: 32px;
    }

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 1280px) {
    width: 180px;
    border-radius: 16px;
    border-width: 3px;
    height: 150px;
    gap: 10px;

    img {
      width: 54px;
    }

    p {
      font-size: 20px;
    }
  }
`;

export const ButtonSuperTask = styled.button`
  all: unset;
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;
  cursor: pointer;

  p {
    font-size: 20px;
    font-weight: 500;
  }

  img {
    width: 68px;
  }

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border-color: ${props => props.theme.black};
  }

  @media(max-width: 320px) {
    width: 108px;
    gap: 6px;

    p {
      font-size: 14px;
    }

    img {
      width: 44px;
    }
  }

  @media(min-width: 480px) {
    width: 120px;

    p {
      font-size: 16px;
    }

    img {
      width: 52px;
    }
  }

  @media(min-width: 1280px) {
    width: 220px;
    border-radius: 16px;
    border-width: 3px;

    p {
      font-size: 24px;
    }

    img {
      width: 84px;
    }
  }
`;

export const ButtonAreaBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 320px) {
    width: 250px;
  }

  @media(min-width: 480px) {
    width: 300px;
    height: 200px;
  }

  @media(min-width: 1280px) {
    width: 460px;
    height: 350px;
    gap: 0;
  }
`;

export const BottomRight = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media(max-width: 320px) {
    width: 108px;
    gap: 8px;
  }

  @media(min-width: 480px) {
    width: 150px;
    height: 100%;
    justify-content: space-between;
  }

  @media(min-width: 1280px) {
    width: 230px;
    height: 100%;
    justify-content: space-between;
  }
`;

export const BottomLeft = styled.div`
  width: 110px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media(max-width: 320px) {
    width: 96px;
    gap: 8px;
  }
  
  @media(min-width: 480px) {
    width: 130px;
    height: 100%;
    justify-content: space-between;
  }

  @media(min-width: 1280px) {
    width: 200px;
    height: 100%;
    justify-content: space-between;
  }
`;

export const ButtonBottom = styled.button`
  all: unset;
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;
  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 500;
  }

  img {
    width: 42px;
  }
  
  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border-color: ${props => props.theme.black};
  }

  @media(max-width: 360px) {
    height: 62px;

    img {
      width: 32px;
    }
  }

  @media(max-width: 320px) {
    height: 48px;
    gap: 8px;

    p { 
      font-size: 12px;
    }

    img {
      width: 18px;
    }
  }

  @media(min-width: 480px) {
    height: 94px;
    gap: 6px;

    p {
      font-size: 16px;
    }

    img {
      width: 42px;
    }
  }

  @media(min-width: 1280px) {
    border-radius: 16px;
    border-width: 3px;
    height: 150px;
    justify-content: center;
    gap: 12px;

    img {
      width: 52px;
    }

    p {
      font-size: 20px;
    }
  }
`;

export const AreaFooter = styled.div`
  width: 300px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 250px;
    height: 52px;
  }

  @media(min-width: 480px) {
    width: 600px;
    height: 52px;
  }

  @media(min-width: 1280px) {
    width: 1200px;
    height: 100px;
    border-width: 4px;
  }
`;

export const ButtonHome = styled.button`
  all: unset;
  width: 250px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme["red-300"]};
  border-bottom-width: 3px;
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  p {
    font-size: 24px;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 320px) {
    width: 200px;
    height: 32px;

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 480px) {
    height: 32px;
    border-radius: 6px;

    p {
      font-size: 18px;
    }
  }

  @media(min-width: 1280px) {
    width: 400px;
    height: 44px;

    p {
      font-size: 32px;
    }
  }
`;