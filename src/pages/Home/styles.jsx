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
  height: 9.75rem;
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
    height: 6.875rem;
  }

  @media(min-width: 768px) {
    height: 10.75rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 4rem;
      justify-content: center;
    }
  }

  @media(min-width: 1280px) {
    height: 6.25rem;
  }
`;

export const HeaderTop = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  padding-top: 1rem;

  .logoFiskD {
    display: none;
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    font-size: 1.125rem;
    padding-inline: 0.75rem;
    padding-top: 0.75rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-top: 0px;

      .logoFiskD {
        display: block;
        width: 80px;
        margin-left: -15.625rem;
      }

      p {
        font-size: 1.75rem;
        margin-left: -100px;
      }
    }
  }

  @media(min-width: 1280px) {
    padding-inline: 2rem;

    .logoFiskD {
      width: 6.25rem;
      margin-left: -30rem;
    }

    p {
      font-size: 2rem;
      margin-left: -100px;
    }
  }
`;

export const HeaderBottom = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  
  .logoFisk {
    width: 172px;
    padding-top: 0.375rem;
  }

  @media (max-width: 320px) {
    gap: 0.625rem;

    .logoFisk {
      width: 120px;
    }
  }

  @media (min-width: 768px) {
    gap: 3rem;
    margin-top: -1.5rem;

    .logoFisk {
      width: 220px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      display: none;

      .logoFisk {
        display: none;
      }
    }
  }
`;

export const Main = styled.div`
  flex: 1;
  width: 18.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 320px) {
    width: 15.625rem;
  }

  @media(min-width: 768px) {
    width: 31.25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 43.75rem;
      align-items: center;
      justify-content: flex-start;
      position: relative;
    }
  }

  @media(min-width: 1280px) {
    width: 68.75rem;
  }
`;

export const Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.875rem;
  justify-content: center;

  @media(max-width: 375px) {
    padding-top: 0.25rem;
    gap: 0.25rem;
  }

  @media(max-width: 360px) {
    gap: 0.625rem;
  }

  @media(max-width: 320px) {
    padding-top: 0.5rem;
    gap: 0.5rem;
  }

  @media(min-width: 768px) {
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 31.25rem;
    }
  }

  @media(min-width: 1280px) {
    width: 37.5rem;
    padding-top: 0;
    gap: 2rem;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  @media(max-width: 376px) {
    gap: 0.625rem;
  }

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(min-width: 768px) {
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 17.5rem;
      gap: 0.75rem;
    }
  }

  @media(min-width: 1280px) {
    width: 100%;
    gap: 1.5rem;
  }
`;

export const Card = styled.a`
  width: 6.875rem;
  height: 5.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
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
    font-size: 0.75rem;
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
    width: 6.25rem;
    height: 4.875rem;

    img {
      height: 38px;
    }

    p {
      font-size: 0.75rem;
    }
  }
  
  @media(max-width: 320px) {
    width: 84px;
    height: 56px;
    border-radius: 8px;
    gap: 0.125rem;
    
    p {
      font-size: 0.625rem;
    }
    
    img {
      height: 24px;
    }
  }

  @media(min-width: 768px) {
    width: 8.75rem;
    height: 8.75rem;

    p {
      font-size: 1.125rem;
    }
    
    img {
      height: 64px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 480px) {
      width: 4.5rem;
      height: 4rem;
      border-radius: 10px;

      p {
        font-size: 0.625rem;
      }
      
      img {
        height: 24px;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 8.75rem;
    height: 8.75rem;

    p {
      font-size: 1.125rem;
    }
    
    img {
      height: 64px;
    }
  }
`;

export const ButtonDayCh = styled.button`
  all: unset;
  width: 100%;
  height: 4.25rem;
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
    height: 3.625rem;

    img {
      width: 220px;
    }
  }

  @media(max-width: 320px) {
    height: 3.25rem;
    
    img {
      width: 190px;
    }
  }

  @media(min-width: 768px) {
    height: 6.25rem;

    img {
      width: 372px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 17.5rem;
      height: 2rem;

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
  }

  @media(min-width: 1280px) {
    width: 100%;
    height: 6.25rem;

    img {
      width: 500px;
    }
  }
`;

export const Right = styled.div`
  display: none;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      display: flex;
      width: 40%;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      scale: 0.8;
      position: absolute;
      right: 0;
      bottom: -1.125rem;

      .bgAvatarImg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
    }
  }

  @media(min-width: 1280px) {
    scale: 0.8;
    bottom: -3rem;
  }

  @media(min-width: 1440px) {
    scale: 0.9;
    bottom: 0px;
  }

  @media(min-width: 1920px) {
    bottom: 4rem;
  }
`;