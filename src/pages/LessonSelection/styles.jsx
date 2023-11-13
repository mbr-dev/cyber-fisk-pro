import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-block: 20px;

  @media(max-width: 360px) {
    gap: 16px
  }

  @media(max-width: 320px) {
    gap: 8px;
    padding-block: 10px;
  }

  @media(min-width: 768px) {
    padding-block: 32px;
    gap: 32px;
  }

  @media(min-width: 1024px) {
    width: 100vw;
    gap: 84px;
    justify-content: center;
    flex-direction: row;
    padding-block: 0;
  }

  @media(min-width: 1440px) {
    gap: 72px;
  }

  @media(min-width: 1920px) {
    gap: 96px;
  }
`;

export const ButtonAreaTop = styled.div`
  width: 80%;
  height: 208px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  p {
    font-size: 16px;
    font-weight: 500;
  }

  @media(max-width: 360px) {
    p {
      font-size: 14px;
    }
  }

  @media(max-width: 320px) {
    width: 70%;
    height: 128px;

    p {
      font-size: 12px;
    }
  }

  @media(min-width: 768px) {
    width: 60%;
    height: 300px;
    gap: 64px;

    p {
      font-size: 24px;
    }
  }

  @media(min-width: 1024px) {
    width: 40%;
    height: 350px;
    gap: 0;
  }

  @media(min-width: 1440px) {
    width: 520px;
  }

  @media(min-width: 1920px) {
    width: 530px;
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
  width: 120px;
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;
  cursor: pointer;

  img {
    width: 36px;
  }

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border-color: ${props => props.theme.black};
  }

  @media(max-width: 360px) {
    width: 116px;
    gap: 6px;
  }

  @media(max-width: 320px) {
    width: 74px;
    height: 58px;
    gap: 4px;

    img {
      width: 24px;
    }
  }

  @media(min-width: 768px) {
    width: 154px;
    height: 138px;
    gap: 10px;

    img {
      width: 54px;
    }
  }

  @media(min-width: 1024px) {
    border-radius: 16px;
    border-width: 3px;
    width: 220px;
    height: 150px;
    gap: 10px;

    img {
      width: 54px;
    }
  }
`;

export const ButtonSuperTask = styled.button`
  all: unset;
  width: 164px;
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
  }

  img {
    width: 64px;
  }

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border-color: ${props => props.theme.black};
  }

  @media(max-width: 360px) {
    width: 148px;
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

  @media(min-width: 768px) {
    width: 220px;

    p {
      font-size: 28px;
    }

    img {
      width: 92px;
    }
  }

  @media(min-width: 1024px) {
    border-radius: 16px;
    border-width: 3px;
    width: 250px;
  }
`;

export const ButtonAreaBottom = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 320px) {
    width: 70%;
  }

  @media(min-width: 768px) {
    width: 60%;
  }

  @media(min-width: 1024px) {
    width: 40%;
    height: 350px;
    gap: 0;
  }

  
  @media(min-width: 1440px) {
    width: 580px;
  }

  @media(min-width: 1920px) {
    width: 700px;
  }
`;

export const BottomRight = styled.div`
  width: 164px;
  display: flex;
  flex-direction: column;
  gap: 16px;

   @media(max-width: 360px) {
    width: 148px;
    gap: 12px;
  }

  @media(max-width: 320px) {
    width: 108px;
    gap: 8px;
  }

  @media(min-width: 768px) {
    width: 220px;
  }

  @media(min-width: 1024px) {
    width: 250px;
    height: 100%;
    justify-content: space-between;
  }

  @media(min-width: 1440px) {
    width: 290px;
  }

  @media(min-width: 1920px) {
    width: 350px;
  }
`;

export const BottomLeft = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media(max-width: 360px) {
    width: 116px;
  }

  @media(max-width: 320px) {
    width: 74px;
    gap: 8px;
  }
  
  @media(min-width: 768px) {
    width: 154px;
    gap: 16px;
  }

  @media(min-width: 1024px) {
    width: 220px;
    height: 100%;
    justify-content: space-between;
  }

  @media(min-width: 1440px) {
    width: 250px;
  }

  @media(min-width: 1920px) {
    width: 300px;
  }
`;

export const ButtonBottom = styled.button`
  all: unset;
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;
  cursor: pointer;

  p {
    font-size: 16px;
    font-weight: 500;
  }

  img {
    width: 36px;
  }
  
  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border-color: ${props => props.theme.black};
  }

  @media(max-width: 360px) {
    p {
      font-size: 14px;
    }

    img {
      width: 32px;
    }
  }

  @media(max-width: 320px) {
    height: 54px;
    gap: 8px;

    p { 
      font-size: 12px;
    }

    img {
      width: 18px;
    }
  }

  @media(min-width: 768px) {
    height: 108px;
    justify-content: space-around;
    gap: 0;

    p {
      font-size: 24px;
    }

    img {
      width: 44px;
    }
  }

  @media(min-width: 1024px) {
    border-radius: 16px;
    border-width: 3px;
    height: 150px;
    justify-content: center;
    gap: 20px;

    img {
      width: 56px;
    }
  }
`;