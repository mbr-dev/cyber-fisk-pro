import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
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
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;

  @media(max-width: 320px) {
    height: 120px;
  }

  @media(min-width: 768px) {
    height: 200px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 48px;
      justify-content: center;
    }
  }

  @media(min-width: 1024px) {
    height: 100px;
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

  @media(max-width: 320px) {
    padding-inline: 12px;
    padding-top: 12px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-top: 10px;
      padding-inline: 10px;

      .logoFiskD {
        display: block;
        width: 80px;
      }
    }
  }

  @media(min-width: 1024px) {
    padding-top: 0;
    padding-inline: 32px;

    .logoFiskD {
      width: 120px;
    }
  }
`;

export const HeaderBottom = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: -10px;
  
  .logoFisk {
    width: 164px;
  }

  @media (max-width: 320px) {
    top: -2px;

    .logoFisk {
      width: 120px;
    }
  }

  @media (min-width: 768px) {
    gap: 64px;
    top: -60px;

    .logoFisk {
      width: 250px;
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
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 320px) {
    width: 250px;
  }

  @media(min-width: 768px) {
    width: 500px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 650px;
      align-items: center;
      justify-content: flex-start;
      position: relative;
    }
  }

  @media(min-width: 1024px) {
    width: 800px;
  }

  @media(min-width: 1366px) {
    width: 1100px;
  }

  @media(min-width: 1920px) {
    width: 1200px;
  }
`;

export const Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  justify-content: center;

  @media(max-width: 320px) {
    gap: 8px;
  }

  @media(min-width: 768px) {
    gap: 32px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 400px;
      gap: 8px;
    }
  }

  @media(min-width: 1024px) {
    width: 500px;
    gap: 32px;
  }

  @media(min-width: 1366px) {
    width: 600px;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media(max-width: 320px) {
    gap: 8px
  }

  @media(min-width: 768px) {
    gap: 32px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 300px;
      gap: 8px;
    }
  }

  @media(min-width: 1024px) {
    width: 100%;
    gap: 32px;
  }
`;

export const Card = styled.a`
  width: 110px;
  height: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
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
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    color: ${props => props.theme.black};
  }
  
  &:hover {
    border-color: ${props => props.theme["gray-700"]};
    background-color: ${props => props.theme["red-200"]};
  }
  
  @media(max-width: 320px) {
    width: 84px;
    height: 56px;
    border-radius: 12px;
    gap: 4px;
    
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
    @media(min-width: 600px) {
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

  @media(min-width: 1024px) {
    width: 8rem;
    height: 8rem;
    border-radius: 18px;

    p {
      font-size: 1rem;
    }
    
    img {
      height: 58px;
    }
  }

  @media(min-width: 1366px) {
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
  height: 64px;
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

  @media(max-width: 320px) {
    height: 52px;
    
    img {
      width: 184px;
    }
  }

  @media(min-width: 768px) {
    height: 120px;

    img {
      width: 372px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 300px;
      height: 42px;

      img {
        width: 250px;
      }

      .btnChMobile {
        display: none;
      }

      .btnChDesk {
        display: block;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 100%;
    height: 6.25rem;

    img {
      width: 450px;
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
      bottom: 24px;
    }
  }

  @media(min-width: 1024px) {
    bottom: 64px;
  }

  @media(min-width: 1366px) {
    bottom: 64px;
  }

  @media(min-width: 1920px) {
    bottom: 100px;
  }
`;