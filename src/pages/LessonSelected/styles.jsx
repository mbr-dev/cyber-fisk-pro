import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  @media(min-width: 600px) {
    width: 700px;
    gap: 0;
    flex-direction: row;
    justify-content: space-between;
    padding-block: 0;
  }

  @media(min-width: 768px) {
    width: 580px;
    gap: 32px;
  }

  @media(min-width: 1024px) {
    width: 1000px;
    gap: 0;
    flex-direction: row;
    justify-content: space-between;
    padding-block: 0;
  }

  @media(min-width: 1440px) {
    width: 1200px;
  }

  @media(min-width: 1920px) {
    width: 1400px;
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

  @media(min-width: 768px) {
    height: 330px;
  }

  @media(min-width: 1024px) {
    width: 460px;
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

  @media(min-width: 768px) {
    width: 172px;
    height: 152px;
    gap: 10px;

    img {
      width: 54px;
    }

    p {
      font-size: 24px;
    }
  }

  @media(min-width: 1024px) {
    width: 180px;
    border-radius: 16px;
    border-width: 3px;
    height: 150px;
    gap: 10px;

    img {
      width: 54px;
    }
  }

  @media(min-width: 1440px) {
    width: 200px;
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

  @media(min-width: 768px) {
    width: 280px;

    p {
      font-size: 32px;
    }

    img {
      width: 96px;
    }
  }

  @media(min-width: 1024px) {
    width: 220px;
    border-radius: 16px;
    border-width: 3px;
  }

  @media(min-width: 1440px) {
    width: 250px;
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

  @media(min-width: 768px) {
    width: 100%;
  }

  @media(min-width: 1024px) {
    width: 460px;
    height: 350px;
    gap: 0;
  }
  
  @media(min-width: 1440px) {
    width: 600px;
  }

  @media(min-width: 1920px) {
    width: 700px;
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

  @media(min-width: 768px) {
    width: 280px;
  }

  @media(min-width: 1024px) {
    width: 200px;
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
  width: 110px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media(max-width: 320px) {
    width: 96px;
    gap: 8px;
  }
  
  @media(min-width: 768px) {
    width: 172px;
  }

  @media(min-width: 1024px) {
    width: 200px;
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

  @media(min-width: 768px) {
    height: 108px;
    gap: 24px;

    p {
      font-size: 24px;
    }

    img {
      width: 52px;
    }
  }

  @media(min-width: 1024px) {
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

  @media(min-width: 768px) {
    width: 620px;
    height: 104px;
  }

  @media(min-width: 1024px) {
    width: 1000px;
    height: 120px;
    border-width: 4px;
  }

  @media(min-width: 1440px) {
    width: 1200px;
  }

  @media(min-width: 1920px) {
    width: 1600px;
  }
`;