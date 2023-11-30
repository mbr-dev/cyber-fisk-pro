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
  height: 156px;
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
    height: 110px;
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
    padding-inline: 32px;

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
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  
  .logoFisk {
    width: 172px;
    padding-top: 6px;
  }

  @media (max-width: 320px) {
    gap: 10px;

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
    justify-content: flex-start;
    position: relative;
  }

  /* exemplo do error de tablet */

/*   @media(min-width: 768px) {
    background-color: blue;
  }
  @media(min-width: 800px) {
    background-color: red;
  }
 */
  @media screen and (min-width: 481px) and (max-width: 1023px){
    width: 700px;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }

  @media(min-width: 1280px) {
    width: 1100px;
  }

  @media(min-width: 1024px) {
    width: 100%;
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

  @media screen and (min-width: 481px) and (max-width: 1023px) {
    width: 50%;
    padding-top: 0;
    gap: 32px;
  }

  @media(min-width: 1280px) {
    width: 60%;
    padding-top: 0;
    gap: 32px;
  }

  @media(min-width: 1024px) {
    width: 60%;
    padding-top: 0;
    gap: 32px;
    margin-left: 50px;
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

  @media screen and (min-width: 481px) and (max-width: 1023px) {
    width: 100%;
    gap: 24px;
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
  
  @media screen and (min-width: 481px) and (max-width: 1023px) {
    width: 140px;
    height: 140px;

    p {
      font-size: 18px
    }
    
    img {
      height: 64px;
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

  @media(min-width: 1024px) {
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

  @media screen and (min-width: 481px) and (max-width: 1023px) {
    width: 100%;
    height: 64px;

    img {
      width: 333px;
    }
  }

  @media(min-width: 1024px) {
    width: 100%;
    height: 100px;

    img {
      width: 500px;
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
    width: 40%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scale: 0.8;
    position: absolute;
    right: 0;
    bottom: -18px;

    .bgAvatarImg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 1023px) {
    display: flex;
    width: 40%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scale: 0.8;
    position: absolute;
    right: 0;
    bottom: 50px;

    .bgAvatarImg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }

  @media(min-width: 1024px) {
    scale: 0.8;
    bottom: 120px;
  }

  @media(min-width: 1280px) {
    scale: 0.8;
    bottom: 70px;
  }

  @media(min-width: 1360px) {
    scale: 0.7;
    bottom: -85px;
  }

  @media(min-width: 1440px) {
    scale: 0.9;
    bottom: 0px;
  }

  @media(min-width: 1920px) {
    bottom: 64px;
  }
`;