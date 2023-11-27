import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media(min-width: 480px) {
    flex-direction: row;
  }
`;

export const Header = styled.header`
  width: 100vw;
  height: 164px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
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

  @media(max-width: 360px) {
    height: 132px;
    padding: 14px;
  }

  @media(max-width: 320px) {
    height: 110px;
    padding: 12px;
  }

  @media(min-width: 480px) {
    width: 40%;
    height: 100vh;
    align-items: center;
    justify-content: space-between;
    padding: 16px ;
    border-end-end-radius: 0;
    border-end-start-radius: 0;

    p {
      display: none;
    }
  }

  @media(min-width: 1280px) {
    padding: 32px;
  }
`;

export const TopHeader = styled.div`  
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 24px;
    font-weight: 500;
    color: ${props => props.theme.white};
  }

  @media(max-width: 360px) {
    p {
      font-size: 20px;
    }
  }

  @media(max-width: 320px) {
    p {
      font-size: 16px;
    }
  }

  @media(min-width: 768px) {
    p {
      font-size: 32px;
    }
  }
`;

export const BottomHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  
  .logoFisk {
    width: 172px;
  }

  @media(max-width: 360px) {
    gap: 36px;

    .logoFisk {
      width: 150px;
    }
  }

  @media(max-width: 320px) {
    gap: 32px;

    .logoFisk {
      width: 120px;
    }
  }

  @media(min-width: 480px) {
    display: none;
  }
`;

export const DivBtnCH = styled.div`
  @media (min-width: 480px) {
    display: none;
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    width: 120px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    white-space: nowrap;
    margin-top: -60px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
  }

  @media(max-width: 360px) {
    p {
      width: 96px;
      height: 24px;
      font-size: 14px;
    }
  }

  @media(max-width: 320px) {
    p {
      width: 80px;
      height: 20px;
      font-size: 12px;
    }
  }
`;

export const AvatarPe = styled.div`
  display: none;
  
  @media (min-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 20;

    p {
      width: 174px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: -32px;
      border-radius: 6px;
      color: ${props => props.theme.white};
      background-color: ${props => props.theme["red-200"]};
      font-size: 18px;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media (min-width: 1280px) {
    p {
      width: 250px;
      height: 52px;
      font-size: 24px;
      margin-top: -90px;
    }
  }
  
  @media (min-width: 1440px) {
    p {
      margin-top: -100px;
    }
  }

  @media (min-width: 1920px) {
    p {
      margin-top: -110px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 480px) {
    width: 60%;
  }
`;

export const HeaderDesktop = styled.div`
  display: none;

  @media(min-width: 480px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 16px;
    padding-right: 16px;
    gap: calc(80% / 2);

    p {
      font-size: 22px;
      font-weight: 500;
      color: ${props => props.theme["gray-700"]};
    }
  }

  @media(min-width: 1280px) {
    padding-top: 32px;
    padding-right: 32px;

    p {
      font-size: 32px;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.theme.white};
  padding-top: 16px;
  gap: 10px;

  @media(max-width: 320px) {
    padding-top: 6px;
    gap: 4px;
  }

  @media(min-width: 480px) {
    gap: 4px;
    padding-top: 0px;
  }

  @media(min-width: 1280px) {
    gap: 16px;
    justify-content: center;
  }
`;

export const AreaInput = styled.div`
  width: 300px;
  text-align: left;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.white};
  position: relative;

  label {
    color: ${props => props.theme["gray-600"]};
    padding-left: 16px;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .inputDate::-webkit-calendar-picker-indicator {
    display: none;
  }

  @media(max-width: 320px) {
    width: 250px;

    label {
      font-size: 12px;
      padding-left: 12px;
      margin-bottom: 6px;
    }
  }

  @media(min-width: 480px) {

    label {
      padding-left: 8px;
      font-size: 12px;
    }
  }

  @media(min-width: 1280px) {
    width: 600px;

    label {
      padding-left: 28px;
      font-size: 24px;
      margin-bottom: 16px;
    }
  }
`;

export const Div = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 10px;

  @media(min-width: 480px) {
    width: 300px;
    gap: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  @media(min-width: 1280px) {
    width: 600px;
  }
`;

export const Input = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  padding-left: 10px;
  border: 2px solid ${props => props.theme["gray-400"]};
  background-color: transparent;
  box-shadow: 0px 1px 10px 0px #00000040;


  p {
    font-weight: normal;
    font-family: "Ubuntu", sans-serif;
    font-size: 16px;
    color: ${props => props.theme["gray-600"]};
  }

  img {
    width: 20px;
  }

  @media(max-width: 360px) {
    height: 36px;
  }

  @media(max-width: 320px) {
    height: 32px;
    gap: 6px;
    padding-left: 6px;

    p {
      font-size: 12px;
    }
  }

  @media(min-width: 480px) {
    height: 32px;
    padding-left: 10px;
    gap: 6px;

    p {
      font-size: 12px;
    }

    img {
      width: 14px;
    }
  }

  @media(min-width: 1280px) {
    height: 64px;
    padding-left: 14px;

    p {
      font-size: 24px;
    }

    img {
      width: 32px;
    }
  }
`;

export const SelectIdioma = styled.div`
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;
`;

export const SelectTitle = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-inline: 5px;
  border: 2px solid transparent;
  border-radius: 8px;
  gap: 10px;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};

  p {
    flex: 1;
    font-size: 18px;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    width: 250px;
    height: 10px;

    p {
      font-size: 12px;
    }

    img {
      width: 18px;
    }
  }

  @media(max-width: 360px) {
    height: 36px;
  }

  @media(min-width: 480px) {
    height: 32px;
    gap: 8px;
    padding-inline: 10px;

    p {
      font-size: 14px;
    }

    img {
      width: 18px;
    }
  }

  @media(min-width: 1280px) {
    height: 64px;
    gap: 20px;

    p {
      font-size: 24px;
    }

    img {
      width: 38px;
    }
  }
`;

export const SelectUl = styled.ul`
  width: 100%;
  position: absolute;
  z-index: 10;
  bottom: -94px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-inline: 16px;
  gap: 12px;
  background-color: ${props => props.theme["red-200"]};

  @media(max-width: 320px) {
    bottom: -78px;
  }

  @media(min-width: 480px) {
    padding: 12px;
    bottom: -86px;
  }

  @media(min-width: 1024px) {
    padding-inline: 44px;
    gap: 20px;
    bottom: -168px;
  }
`;

export const SelectLi = styled.li`
  width: 100%;
  font-weight: 500;
  list-style: none;
  color: ${props => props.theme.white};

  &:hover {
    background-color: ${props => props.theme["red-300"]};
  }

  @media(max-width: 320px) {
    font-size: 12px;
  }

  @media(min-width: 480px) {
    font-size: 12px;
  }

  @media(min-width: 1024px) {
    font-size: 28px;
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
    width: 300px;
    height: 52px;
  }

  @media(min-width: 1280px) {
    width: 600px;
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