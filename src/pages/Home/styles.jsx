import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    width: 620px;
  }

  @media(min-width: 1024px) {
    width: 90%;
    align-items: flex-start;
  }
`;

export const Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 14px;
  gap: 14px;
  justify-content: flex-start;

  @media(max-width: 375px) {
    padding-top: 4px;
    gap: 4px;
  }

  @media(max-width: 360px) {
    padding-top: 14px;
    gap: 12px;
  }

  @media(max-width: 320px) {
    padding-top: 8px;
    gap: 8px;
  }

  @media(min-width: 768px) {
    width: 500px;
  }

  @media(min-width: 1024px) {
    padding-inline: 20px;
  }

  @media(min-width: 1920px) {
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

  @media(min-width: 768px) {
    width: 500px;
  }

  @media(min-width: 1024px) {
    width: 100%;
    gap: 3rem;
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
    font-size: 14px;
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

  @media(min-width: 768px) {
    width: 180px;
    height: 156px;

    p {
      font-size: 20px
    }
    
    img {
      height: 72px;
    }
  }

  @media(min-width: 1920px) {
    width: 180px;
    height: 186px;

    p {
      font-size: 24px
    }
    
    img {
      height: 84px;
    }
  }
`;

export const Right = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 190px;
    margin-bottom: -24px;
  }

  p {
    width: 200px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-top: -18px;
    font-size: 20px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
  }

  @media(min-width: 1440px) {
    img {
      width: 210px;
    }

    p {
      width: 220px;
      height: 38px;
      font-size: 24px;
      margin-top: -20px;
    }
  }

  @media(min-width: 1920px) {
    img {
      width: 250px;
    }

    p {
      width: 300px;
      height: 56px;
      font-size: 28px;
      margin-top: -28px;
    }
  }

  @media(min-width: 2560px) {
    img {
      width: 270px;
    }

    p {
      width: 300px;
      height: 56px;
      font-size: 28px;
      margin-top: -28px;
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

  @media(min-width: 768px) {
    height: 110px;

    img {
      width: 320px;
    }
  }

  @media(min-width: 1024px) {
    width: 100%;

    img {
      width: 500px;
    }
  }

  @media(min-width: 1920px) {
    height: 74px;
  }

  @media(min-width: 2560px) {
    height: 84px;
  }
`;