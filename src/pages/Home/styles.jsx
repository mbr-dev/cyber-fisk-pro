import styled from "styled-components"

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
    height: 100px;
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
`;

export const HeaderBottom = styled.header`
  display: flex;
  align-items: center;
  
  .logoFisk {
    width: 150px;
  }

  @media (max-width: 320px) {
    .logoFisk {
      width: 120px;
    }
  }

  @media (min-width: 480px) {
    display: none;

    .logoFisk {
      display: none;
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 90px;
    margin-top: -20px;
  }

  p {
    width: 120px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
  }

  @media(max-width: 320px) {
    img {
      width: 60px;
    }

    p {
      width: 80px;
      height: 20px;
      font-size: 12px;
    }
  }

  @media(min-width: 480px) {
    img {
      width: 92px;
    }

    p {
      width: 130px;
      height: 32px;
      font-size: 18px;
    }
  }

  @media(min-width: 1280px) {
    width: 400px;
    height: 500px;

    p {
      width: 300px;
      height: 52px;
      font-size: 32px;
    }
  }
`;

export const Main = styled.div`
  flex: 1;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 320px) {
    width: 250px;
  }

  @media(min-width: 480px) {
    width: 700px;
    align-items: center;
  }

  @media(min-width: 1280px) {
    width: 1100px;
  }
`;

export const Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  justify-content: center;

  @media(max-width: 375px) {
    padding-top: 4px;
    gap: 4px;
  }

  @media(max-width: 360px) {
    gap: 12px;
  }

  @media(max-width: 320px) {
    padding-top: 8px;
    gap: 8px;
  }

  @media(min-width: 480px) {
    width: 500px;
  }

  @media(min-width: 1280px) {
    width: 600px;
    padding-top: 0;
    gap: 32px;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  @media(max-width: 376px) {
    gap: 10px;
  }

  @media(max-width: 320px) {
    gap: 8px;
  }

  @media(min-width: 480px) {
    width: 280px;
  }

  @media(min-width: 1024px) {
    width: 100%;
    gap: 24px;
  }
`;

export const Card = styled.a`
  width: 110px;
  height: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 2px solid transparent;
  background-color: ${props => props.theme.white};
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 18px;
  cursor: pointer;
  transition: all ease 0.3s;
  
  img {
    height: 42px;
  }

  p {
    font-weight: 500;
    text-align: center;
    font-size: 12px;
    color: ${props => props.theme.black};
  }
  
  &:hover {
    border-color: ${props => props.theme["gray-700"]};
    background-color: ${props => props.theme["red-200"]};
    
    p {
    color: ${props => props.theme.white};
  }
  }

  @media(max-width: 360px) {
    width: 100px;
    height: 78px;

    img {
      height: 38px;
    }

    p {
      font-size: 12px;
    }
  }
  
  @media(max-width: 320px) {
    width: 84px;
    height: 56px;
    border-radius: 8px;
    gap: 2px;
    
    p {
      font-size: 10px
    }
    
    img {
      height: 24px;
    }
  }

  @media(min-width: 480px) {
    width: 72px;
    height: 64px;
    border-radius: 10px;

    p {
      font-size: 10px
    }
    
    img {
      height: 24px;
    }
  }

  @media(min-width: 1280px) {
    width: 140px;
    height: 140px;

    p {
      font-size: 18px
    }
    
    img {
      height: 64px;
    }
  }
`;

export const ButtonDayCh = styled.button`
  all: unset;
  width: 100%;
  height: 68px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  background-color: ${props => props.theme.white};
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  cursor: pointer;
  transition: all ease 0.3s;

  img {
    width: 242px;
  }

  .btnChDesk {
    display: none;
  }

  &:hover {
    border-color: ${props => props.theme["gray-700"]};
    background-color: ${props => props.theme["red-200"]};
  }

  @media(max-width: 360px) {
    height: 58px;

    img {
      width: 220px;
    }
  }

  @media(max-width: 320px) {
    height: 52px;
    
    img {
      width: 190px;
    }
  }

  @media(min-width: 480px) {
    width: 280px;
    height: 32px;

    img {
      width: 200px;
    }

    .btnChMobile {
      display: none;
    }

    .btnChDesk {
      display: block;
    }
  }

  @media(min-width: 1280px) {
    width: 100%;
    height: 100px;

    img {
      width: 500px;
    }
  }
`;

export const Right = styled.div`
  display: none;

  @media(min-width: 480px) {
    display: flex;
    width: 150px;
    height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
    }

    p {
      width: 150px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      font-size: 16px;
      color: ${props => props.theme.white};
      background-color: ${props => props.theme["red-200"]};
    }
  }

  @media(min-width: 1280px) {
    width: 30%;
    height: 420px;

    img {
      width: 190px;
    }

    p {
      width: 220px;
      height: 48px;
      border-radius: 8px;
      font-size: 24px;
    }
  }
`;