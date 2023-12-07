import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
    }
  }
`;

export const Header = styled.header`
  width: 100vw;
  height: 9.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
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
    padding: 0.75rem;
  }

  @media(min-width: 768px) {
    padding: 1rem;
    height: 11.75rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 40%;
      height: 100vh;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      border-end-end-radius: 0;
      border-end-start-radius: 0;

      p {
        display: none;
      }
    }
  }

  @media(min-width: 1280px) {
    padding: 2rem;
  }
`;

export const TopHeader = styled.div`  
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${props => props.theme.white};
  }

  @media(max-width: 360px) {
    p {
      font-size: 20px;
    }
  }

  @media(max-width: 320px) {
    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 768px) {
    p {
      font-size: 2rem;
    }
  }
`;

export const BottomHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  
  .logoFisk {
    width: 172px;
    padding-top: 0.375rem;
  }

  @media(max-width: 320px) {
    gap: 0.375rem;

    .logoFisk {
      width: 120px;
    }
  }

  @media(min-width: 768px) {
    gap: 3rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      display: none;
    }
  }
`;

export const DivBtnCH = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 60%;
    }
  }
`;

export const HeaderDesktop = styled.div`
  display: none;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-top: 1rem;
      padding-right: 1rem;
      gap: calc(80% / 2);

      p {
        font-size: 1.375rem;
        font-weight: 500;
        color: ${props => props.theme["gray-700"]};
      }
    }
  }

  @media(min-width: 1280px) {
    padding-top: 2rem;
    padding-right: 2rem;

    p {
      font-size: 2rem;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.theme.white};
  padding-top: 1rem;
  gap: 0.625rem;

  @media(max-width: 320px) {
    padding-top: 0.375rem;
    gap: 0.25rem;
  }

  @media(min-width: 768px) {
    gap: 1rem;
    padding-top: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.25rem;
      padding-top: 0px;
    }
  }

  @media(min-width: 1280px) {
    gap: 1rem;
    justify-content: center;
  }
`;

export const AreaInput = styled.div`
  width: 18.75rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.white};
  position: relative;

  label {
    color: ${props => props.theme["gray-600"]};
    padding-left: 1rem;
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .inputDate::-webkit-calendar-picker-indicator {
    display: none;
  }

  @media(max-width: 320px) {
    width: 15.625rem;

    label {
      font-size: 0.75rem;
      padding-left: 0.75rem;
      margin-bottom: 0.375rem;
    }
  }

  @media(min-width: 768px) {
    width: 31.25rem;

    label {
      padding-left: 1.75rem;
      font-size: 1.5rem;
      margin-bottom: 0.25rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 22rem;

      label {
        padding-left: 0.5rem;
        font-size: 0.75rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 37.5rem;

    label {
      padding-left: 1.75rem;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

export const Div = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 0.625rem;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 22rem;
      gap: 1rem;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  @media(min-width: 1280px) {
    width: 37.5rem;
  }
`;

export const Input = styled.div`
  width: 100%;
  height: 2.625rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  border-radius: 8px;
  padding-left: 0.625rem;
  border: 2px solid ${props => props.theme["gray-400"]};
  background-color: transparent;
  box-shadow: 0px 1px 10px 0px #00000040;


  p {
    font-weight: normal;
    font-family: "Ubuntu", sans-serif;
    font-size: 1rem;
    color: ${props => props.theme["gray-600"]};
  }

  img {
    width: 20px;
  }

  @media(max-width: 360px) {
    height: 2.25rem;
  }

  @media(max-width: 320px) {
    height: 2rem;
    gap: 0.375rem;
    padding-left: 0.375rem;

    p {
      font-size: 12px;
    }
  }

  @media(min-width: 768px) {
    height: 4rem;
    padding-left: 0.875rem;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 32px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 2rem;
      padding-left: 0.625rem;
      gap: 0.375rem;

      p {
        font-size: 0.75rem;
      }

      img {
        width: 14px;
      }
    }
  }

  @media(min-width: 1280px) {
    height: 4rem;
    padding-left: 0.875rem;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 32px;
    }
  }
`;

export const SelectIdioma = styled.div`
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;
`;

export const SelectTitle = styled.div`
  width: 100%;
  height: 2.625rem;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-inline: 5px;
  border: 2px solid transparent;
  border-radius: 8px;
  gap: 0.625rem;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};

  p {
    flex: 1;
    font-size: 1.125rem;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    width: 15.625rem;
    height: 0.625rem;

    p {
      font-size: 0.75rem;
    }

    img {
      width: 18px;
    }
  }

  @media(max-width: 360px) {
    height: 2.25rem;
  }

  @media(min-width: 768px) {
    height: 4rem;
    gap: 1.25rem;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 38px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 2rem;
      gap: 0.5rem;
      padding-inline: 0.625rem;

      p {
        font-size: 1.125rem;
      }

      img {
        width: 18px;
      }
    }
  }

  @media(min-width: 1280px) {
    height: 4rem;
    gap: 1.25rem;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 38px;
    }
  }
`;

export const SelectUl = styled.ul`
  width: 100%;
  position: absolute;
  z-index: 10;
  bottom: -5.875rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-inline: 1rem;
  gap: 0.75rem;
  background-color: ${props => props.theme["red-200"]};

  @media(max-width: 320px) {
    bottom: -78px;
  }

  @media(min-width: 768px) {
    padding-inline: 2.75rem;
    gap: 1.25rem;
    bottom: -9.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding: 0.75rem;
      bottom: -5.375rem;
    }
  }

  @media(min-width: 1280px) {
    padding-inline: 2.75rem;
    gap: 1.25rem;
    bottom: -10.5rem;
  }
`;

export const SelectLi = styled.li`
  width: 100%;
  font-weight: 500;
  list-style: none;
  color: ${props => props.theme.white};

  &:hover {
    background-color: ${props => props.theme["red-300"]};
  }

  @media(max-width: 320px) {
    font-size: 0.75rem;
  }

  @media(min-width: 768px) {
    font-size: 1.75rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      font-size: 0.75rem;
    }
  }

  @media(min-width: 1280px) {
    font-size: 1.75rem;
  }
`;