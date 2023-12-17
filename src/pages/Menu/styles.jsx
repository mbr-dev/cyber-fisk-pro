import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
    }
  }
`;

export const Header = styled.header`
  width: 100vw;
  height: 120px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px 16px 0 16px;
  border-end-end-radius: 18px;
  border-end-start-radius: 18px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media(max-width: 320px) {
    height: 100px;
  }

  @media(min-width: 768px) {
    height: 150px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 40%;
      height: 100vh;
      border-end-end-radius: 0;
      border-end-start-radius: 0;
      padding: 1rem;
    }
  }

  @media(min-width: 1024px) {
    padding: 32px;
  }
`;

export const HeaderButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DivBtnCH = styled.div`
  width: 232px;
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 320px) {
    width: 200px;
  }

  @media (min-width: 768px) {
    width: 420px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      display: none;
    }
  }
`; 

export const AvatarPe = styled.div`
  display: none;
  
  @media(orientation: landscape) {
    @media (min-width: 600px) {
      display: block;
      position: absolute;
      top: -20px;
      left: 92px;
      z-index: 1000;
    }
  }
  
  @media (min-width: 1024px) {
    top: -52px;
    left: 80px;
  }

  @media (min-width: 1366px) {
    top: -82px;
    left: 132px;
  }

  @media (min-width: 1920px) {
    top: -52px;
    left: 200px;
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 60%;
      height: 100vh;
    }
  }
`;

export const BtnC = styled.div`
  display: none;

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      display: block;
      position: absolute;
      top: 16px;
      right: 16px;
    }
}

  @media (min-width: 1024px) {
    top: 32px;
    right: 32px;
  }
`;

export const Main = styled.main`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  gap: 16px;
  
  p {
    display: flex;
    align-items: flex-start;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
  }

  @media(max-width: 320px) {
    width: 250px;
    gap: 12px;

    p {
      font-size: 18px;
    }
  }

  @media(min-width: 768px) {
    width: 500px;
    justify-content: center;
    padding-top: 48px;
    gap: 24px;

    p {
      font-size: 32px;
      padding-left: 32px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 300px;
      padding-top: 24px;
      gap: 10px;

      p {
        font-size: 18px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 420px;
    justify-content: center;
    padding-top: 64px;
    gap: 24px;

    p {
      font-size: 32px;
      padding-left: 32px;
    }
  }

  @media(min-width: 1366px) {
    width: 600px;
    padding-top: 92px;
  }

  @media(min-width: 1920px) {
    width: 800px;
    padding-top: 120px;

    p {
      font-size: 36px;
      padding-left: 36px;
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
    height: 54px;
  }

  @media(min-width: 768px) {
    width: 500px;
    height: 100px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 300px;
      height: 52px;
    }
  }

  @media(min-width: 1024px) {
    width: 420px;
    height: 100px;
    border-width: 4px;
  }

  @media(min-width: 1366px) {
    width: 600px;
    height: 120px
  }

  @media(min-width: 1920px) {
    width: 800px;
  }
`;

export const ButtonLogout = styled.button`
  all: unset;
  width: 15.625rem;
  height: 2.25rem;
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
    font-size: 1.5rem;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 320px) {
    width: 12.5rem;
    height: 2rem;

    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 768px) {
    width: 300px;
    height: 2.75rem;

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 200px;
      height: 2rem;
      border-radius: 6px;

      p {
        font-size: 1.125rem;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 300px;
    height: 2.75rem;
    border-radius: 12px;

    p {
      font-size: 2rem;
    }
  }

  @media(min-width: 1366px) {
    width: 400px;
    height: 48px;
  }
`;