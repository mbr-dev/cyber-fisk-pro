import styled from "styled-components";

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
  height: 118px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px 0 16px;
  position: relative;

  .bgHeaderImg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-end-end-radius: 18px;
    border-end-start-radius: 18px;
  }

  @media(max-width: 320px) {
    height: 98px;
  }

  @media(min-width: 480px) {
    width: 40%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    padding: 16px 16px 0px 16px;

    .bgHeaderImg {
      border-end-end-radius: 0;
      border-end-start-radius: 0;
    }
  }

  @media(min-width: 1280px) {
    padding: 32px 32px 0px 32px;
  }
`;

export const HeaderButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DivBtnCH = styled.div`
  @media (min-width: 480px) {
    display: none;
  }
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 20;

  img {
    width: 100px;
    margin-top: -12px;
  }

  p {
    width: 174px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -20px;
    text-align: center;
    border-radius: 6px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    font-size: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media(max-width: 320px) {
    img {
      width: 80%;
    }

    p {
      bottom: 2px;
    }
  }

  @media(min-width: 480px) {
    display: none;
  }
`;

export const AvatarPe = styled.div`
  display: none;
  
  @media (min-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    z-index: 20;
    
    img {
      width: 80px;
      height: 220px;
    }

    p {
      width: 174px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
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
    padding-bottom: 24px;
    
    img {
      width: 80px;
      height: 220px;
    }

    p {
      width: 300px;
      height: 52px;
      font-size: 24px;
    }
  }
  
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  position: relative;

  @media(min-width: 480px) {
    width: 60%;
    height: 100vh;
  }
`;

export const BtnC = styled.div`
  display: none;

  @media (min-width: 480px) {
    display: block;
    position: absolute;
    top: 16px;
    right: 16px;
  }

  @media (min-width: 1280px) {
    top: 32px;
    right: 32px;
  }
`;

export const Main = styled.main`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  gap: 16px;
  
  p {
    display: flex;
    align-items: flex-start;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
  }

  @media(max-width: 360px) {
    padding-top: 42px;
  }

  @media(max-width: 320px) {
    width: 250px;
    gap: 12px;

    p {
      font-size: 18px;
    }
  }

  @media(min-width: 480px) {
    width: 300px;
    padding-top: 32px;
    gap: 12px;

    p {
      font-size: 20px;
    }
  }

  @media(min-width: 1280px) {
    width: 600px;
    justify-content: center;
    padding-top: 100px;
    gap: 24px;

    p {
      font-size: 32px;
      padding-left: 32px;
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
    width: 300px;
    height: 52px;
  }

  @media(min-width: 1280px) {
    width: 600px;
    height: 100px;
    border-width: 4px;
  }
`;

export const ButtonLogout = styled.button`
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