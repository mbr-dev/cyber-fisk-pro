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
  height: 6.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 1rem 0 1rem;
  position: relative;

  .bgHeaderImg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 0;
    z-index: -1;
    border-end-end-radius: 18px;
    border-end-start-radius: 18px;
  }

  @media(max-width: 320px) {
    height: 4.875rem;
  }

  @media(min-width: 768px) {
    height: 9rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 40%;
      height: 100vh;
      flex-direction: column;
      align-items: center;
      padding: 1rem;

      .bgHeaderImg {
        border-end-end-radius: 0;
        border-end-start-radius: 0;
      }
    }
  }

  @media(min-width: 1280px) {
    padding: 2rem;
  }
`;

export const HeaderButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DivBtnCH = styled.div`
  width: 15rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 320px) {
    width: 12.5rem;
  }

  @media (min-width: 768px) {
    width: 27.5rem;
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
  gap: 1rem;
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
      top: 1rem;
      right: 1rem;
    }
}

  @media (min-width: 1280px) {
    top: 2rem;
    right: 2rem;
  }
`;

export const Main = styled.main`
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  gap: 1rem;
  
  p {
    display: flex;
    align-items: flex-start;
    font-size: 1.5rem;
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

  @media(min-width: 768px) {
    width: 31.25rem;
    justify-content: center;
    padding-top: 3rem;
    gap: 1.5rem;

    p {
      font-size: 2rem;
      padding-left: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 18.75rem;
      padding-top: 2rem;
      gap: 0.75rem;

      p {
        font-size: 1.25rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 37.5rem;
    justify-content: center;
    padding-top: 6.25rem;
    gap: 1.5rem;

    p {
      font-size: 2rem;
      padding-left: 2rem;
    }
  }
`;

export const AreaFooter = styled.div`
  width: 18.75rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 15.625rem;
    height: 3.25rem;
  }

  @media(min-width: 768px) {
    width: 31.25rem;
    height: 4.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 18.75rem;
      height: 3.25rem;
    }
  }

  @media(min-width: 1280px) {
    width: 37.5rem;
    height: 6.25rem;
    border-width: 4px;
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
    width: 25rem;
    height: 2.75rem;

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 15.625rem;
      height: 2rem;
      border-radius: 6px;

      p {
        font-size: 1.125rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 25rem;
    height: 2.75rem;

    p {
      font-size: 2rem;
    }
  }
`;