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
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 16px 0 16px;
  border-end-end-radius: 18px;
  border-end-start-radius: 18px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;

  @media(max-width: 320px) {
    height: 110px;
    padding: 10px 10px 0 10px;
  }

  @media(min-width: 768px) {
    height: 220px;
    padding: 24px 24px 0 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 40%;
      height: 100vh;
      align-items: center;
      justify-content: space-between;
      padding: 16px 16px 0 16px;
      border-end-end-radius: 0;
      border-end-start-radius: 0;
    }
  }

  @media(min-width: 1024px) {
    padding: 32px 32px 0 32px;
  }
`;

export const TopHeader = styled.div`  
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  p {
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    p {
      font-size: 16px;
    }
  }

  @media(min-width: 768px) {
    p {
      font-size: 32px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      p {
        display: none;
      }
    }
  }
`;

export const BottomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: -54px;
  
  .logoFisk {
    width: 164px;
  }

  @media(max-width: 320px) {
    margin-top: -40px;
    gap: 20px;

    .logoFisk {
      width: 120px;
    }
  }

  @media(min-width: 768px) {
    margin-top: -120px;
    gap: 100px;

    .logoFisk {
      width: 280px;
    }
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
      padding-top: 16px;
      padding-right: 16px;
      gap: calc(80% / 2);

      p {
        font-size: 24px;
        font-weight: 500;
        color: ${props => props.theme["gray-700"]};
      }
    }
  }

  @media(min-width: 1024px) {
    padding-top: 32px;
    padding-right: 32px;

    p {
      font-size: 36px;
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
  padding-top: 16px;
  gap: 16px;

  @media(max-width: 320px) {
    padding-top: 4px;
    gap: 4px;
  }

  @media(min-width: 768px) {
    padding-top: 20px;
    gap: 20px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-top: 0px;
      gap: 4px;
    }
  }

  @media(min-width: 1024px) {
    gap: 16px;
    justify-content: center;
  }
`;

export const AreaInput = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: ${props => props.theme.white};
  position: relative;

  label {
    color: ${props => props.theme["gray-600"]};
    padding-left: 12px;
    font-size: 16px;
    font-weight: 500;
  }

  .inputDate::-webkit-calendar-picker-indicator {
    display: none;
  }

  @media(max-width: 320px) {
    width: 250px;

    label {
      font-size: 12px;
      padding-left: 8px;
    }
  }

  @media(min-width: 768px) {
    width: 500px;
    gap: 6px;

    label {
      padding-left: 16px;
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 350px;
      gap: 4px;

      label {
        padding-left: 8px;
        font-size: 12px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 500px;
    gap: 6px;

    label {
      padding-left: 16px;
      font-size: 24px;
    }
  }

  @media(min-width: 1366px) {
    width: 700px;
  }
`;

export const Div = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 16px;

  @media(max-width: 320px) {
    gap: 4px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 350px;
      gap: 32px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  @media(min-width: 1024px) {
    width: 500px;
    gap: 72px;
  }

  @media(min-width: 1366px) {
    width: 700px;
    gap: 120px;
  }
`;

export const Input = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  padding-left: 12px;
  border: 2px solid ${props => props.theme["gray-400"]};
  background-color: transparent;
  box-shadow: 0px 1px 10px 0px #00000040;

  p {
    font-size: 16px;
    font-weight: normal;
    font-family: "Ubuntu", sans-serif;
    color: ${props => props.theme["gray-600"]};
  }

  img {
    width: 24px;
  }

  @media(max-width: 320px) {
    height: 36px;
    gap: 6px;
    padding-left: 8px;

    p {
      font-size: 12px;
    }

    img {
      width: 18px;
    }
  }

  @media(min-width: 768px) {
    height: 64px;
    padding-left: 14px;

    p {
      font-size: 24px;
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

  @media(min-width: 1024px) {
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
  height: 44px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-inline: 12px;
  border: 2px solid transparent;
  border-radius: 8px;
  gap: 10px;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};

  p {
    flex: 1;
    font-size: 1.125rem;
    font-weight: 500;
  }

  img {
    width: 28px;
  }

  .setaImg {
    width: 40px;
  }

  @media(max-width: 320px) {
    height: 36px;
    padding-inline: 10px;

    p {
      font-size: 14px;
    }

    img {
      width: 24px;
    }

    .setaImg {
      width: 32px;
    }
  }

  @media(min-width: 768px) {
    height: 64px;
    gap: 16px;

    p {
      font-size: 32px;
    }

    img {
      width: 36px;
    }

    .setaImg {
      width: 40px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 2rem;
      gap: 8px;
      padding-inline: 0.625rem;

      p {
        font-size: 16px;
      }

      img {
        width: 20px;
      }

      .setaImg {
        width: 32px;
      }
    }
  }

  @media(min-width: 1024px) {
    height: 64px;
    gap: 16px;

    p {
      font-size: 32px;
    }

    img {
      width: 36px;
    }

    .setaImg {
      width: 40px;
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

  @media(min-width: 1024px) {
    padding-inline: 2.75rem;
    gap: 1.25rem;
    bottom: -10rem;
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

  @media(min-width: 1024px) {
    font-size: 1.75rem;
  }
`;