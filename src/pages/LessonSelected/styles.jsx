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
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-end-end-radius: 18px;
  border-end-start-radius: 18px;
  background-repeat: no-repeat;
  background-size: cover;

  @media(max-width: 320px) {
    height: 100px;
  }

  @media(min-width: 768px) {
    height: 150px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 54px;
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
  align-items: flex-start;
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

  @media(min-width: 768px) {
    p {
      font-size: 32px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-top: 0px;

      .logoFiskD {
        display: block;
        width: 84px;
        margin-left: -250px;
      }

      p {
        font-size: 1.75rem;
        margin-left: -100px;
      }
    }
  }

  @media(min-width: 1024px) {
    .logoFiskD {
      width: 132px;
      margin-left: -280px;
    }

    p {
      font-size: 48px;
      margin-left: -6.25rem;
    }
  }

  @media(min-width: 1366px) {
    .logoFiskD {
      margin-left: -480px;
    }

    p {
      margin-left: -6.25rem;
    }
  }

  @media(min-width: 1920px) {
    .logoFiskD {
      margin-left: -650px;
    }
  }
`;

export const HeaderBottom = styled.header`
  display: flex;
  align-items: center;
  
  .logoFisk {
    width: 140px;
  }

  @media (max-width: 320px) {
    .logoFisk {
      width: 116px;
    }
  }

  @media (min-width: 768px) {
    .logoFisk {
      width: 164px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      .logoFisk {
        display: none;
      }
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 24px;

  @media(max-width: 320px) {
    width: 250px;
    margin-top: 8px;
    gap: 16px;
  }

  @media(min-width: 768px) {
    width: 500px;
    margin-top: 32px;
    gap: 32px;
  }
  
  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 570px;
      margin-top: 8px;
      gap: 0;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media(min-width: 1024px) {
    width: 850px;
    margin-top: 0px;
    align-items: center;
  }
  
  @media(min-width: 1366px) {
    width: 62.5rem;
  }
`;

export const ButtonAreaTop = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media(max-width: 320px) {
    height: 150px;
  }
  
  @media(min-width: 768px) {
    height: 320px;
  }
  
  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 250px;
      height: 180px;
    }
  }
  
  @media(min-width: 1024px) {
    width: 400px;
    height: 350px;
  }

  @media(min-width: 1366px) {
    width: 450px;
    height: 400px;
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
  width: 100px;
  height: 94px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;
  cursor: pointer;

  img {
    width: 42px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
  }

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
    border-color: ${props => props.theme.black};
  }

  @media(max-width: 320px) {
    width: 88px;
    height: 64px;

    img {
      width: 32px;
    }

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    width: 164px;
    height: 140px;
    border-radius: 8px;
    border-width: 3px;
    gap: 10px;

    img {
      width: 54px;
    }

    p {
      font-size: 20px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 84px;
      height: 76px;
      gap: 0.25rem;

      img {
        width: 32px;
      }

      p {
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 164px;
    height: 150px;
    border-radius: 16px;
    border-width: 3px;
    gap: 10px;

    img {
      width: 54px;
    }

    p {
      font-size: 20px;
    }
  }

  @media(min-width: 1366px) {
    width: 172px;
    height: 164px;
    border-radius: 16px;
    border-width: 3px;
    gap: 10px;

    img {
      width: 64px;
    }

    p {
      font-size: 24px;
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
    font-size: 1.25rem;
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
    width: 120px;
    gap: 6px;

    p {
      font-size: 0.875rem;
    }

    img {
      width: 44px;
    }
  }

  @media(min-width: 768px) {
    width: 220px;

    p {
      font-size: 24px;
    }

    img {
      width: 84px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 120px;

      p {
        font-size: 16px;
      }

      img {
        width: 52px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 192px;
    border-radius: 16px;
    border-width: 3px;

    p {
      font-size: 24px;
    }

    img {
      width: 84px;
    }
  }

  @media(min-width: 1366px) {
    width: 220px;
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
    width: 500px;
  }
  
  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 300px;
      height: 180px;
    }
  }
  
  @media(min-width: 1024px) {
    width: 400px;
    height: 350px;
  }

  @media(min-width: 1366px) {
    width: 500px;
    height: 400px;
  }
`;

export const BottomRight = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media(max-width: 320px) {
    width: 120px;
    gap: 8px;
  }

  @media(min-width: 768px) {
    width: 220px;
    gap: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 150px;
      height: 100%;
      gap: 16px;
      justify-content: space-between;
    }
  }

  @media(min-width: 1024px) {
    width: 184px;
  }

  @media(min-width: 1366px) {
    width: 252px;
  }
`;

export const BottomLeft = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media(max-width: 320px) {
    width: 94px;
    gap: 8px
  }

  @media(min-width: 768px) {
    width: 164px;
    gap: 24px;
  }
  
  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 120px;
      height: 100%;
      gap: 16px;
      justify-content: space-between;
    }
  }

  @media(min-width: 1024px) {
    width: 172px;
    height: 100%;
    justify-content: space-between;
  }

  @media(min-width: 1366px) {
    width: 200px;
  }
`;

export const ButtonBottom = styled.button`
  all: unset;
  width: 100%;
  height: 72px;
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
    font-size: 0.875rem;
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

  @media(max-width: 320px) {
    height: 48px;
    gap: 8px;

    p { 
      font-size: 0.75rem;
    }

    img {
      width: 18px;
    }
  }

  @media(min-width: 768px) {
    height: 124px;
    gap: 16px;

    img {
      width: 52px;
    }

    p {
      font-size: 20px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 84px;
      gap: 6px;

      p {
        font-size: 14px;
      }

      img {
        width: 38px;
      }
    }
  }

  @media(min-width: 1024px) {
    height: 150px;
    border-radius: 1rem;
    border-width: 3px;
    justify-content: center;
    gap: 16px;

    img {
      width: 48px;
    }

    p {
      font-size: 20px;
    }
  }

  @media(min-width: 1366px) {
    height: 164px;

    img {
      width: 52px;
    }
  }
`;