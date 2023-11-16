  import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Header = styled.header`
  width: 100%;
  padding-block: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-end-end-radius: 18px;
  border-end-start-radius: 18px;
  overflow: hidden;
  position: relative;

  .logoFisk {
    width: 200px;
  }

  .bgImg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }

  @media(max-width: 320px) {
    padding-block: 12px;
    
    .logoFisk {
      width: 130px;
    }
  }

  @media(min-width: 1024px) {
    width: 600px;
    height: 100vh;
    border-end-end-radius: 0;
    border-end-start-radius: 0;
    flex-direction: column;
    gap: 20px;

    .logoFisk {
      width: 300px;
    }

    .buddyImg {
      width: 420px;
    }
  }

  @media(min-width: 2560px) {
    width: 40%;

    .logoFisk {
      width: 400px;
    }

    .buddyImg {
      width: 500px;
    }
  }
`;

export const FooterBlue = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: ${props => props.theme.white};

  p {
    font-size: 20px;
    font-weight: normal;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;

    img {
      width: 56px;
    }
  }

  @media(min-width: 2560px) {
    p {
      font-size: 28px;
    }

    div {
      gap: 44px;

      img {
        width: 84px;
      }
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  gap: 1rem;
  margin-bottom: 2rem;

  @media(max-width: 376px) {
    padding-block: 2rem;
    width: 18.75rem;
    padding-block: 1rem;
    margin-bottom: 1.5rem;
    gap: 0.875rem;
  }

  @media(max-width: 360px) {
    padding-block: 2rem;
    gap: 0.5rem;
  }

  @media(max-width: 320px) {
    padding-block: 2rem;
    padding-block: 0.5rem;
    width: 16rem;
    gap: 0.375rem;
    margin-bottom: 0rem;
  }

  @media(min-width: 600px) {
    margin-top: 52px;
    padding-block: 2rem;
    width: 500px;
    padding-block: 1rem;
    margin-bottom: 1.5rem;
  }

  @media(min-width: 1024px) {
    width: 70%;
  }

  @media(min-width: 2560px) {
    width: 60%;
  }
`;

export const AreaInput = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    color: ${props => props.theme["gray-600"]};
    padding-left: 1rem;
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  svg {
    position: absolute;
    top: 44px;
    left: 10px;
    color: ${props => props.theme["gray-400"]};
  }
  
  .eye {
    position: absolute;
    top: 44px;
    left: 290px;
    color: ${props => props.theme["gray-400"]};
    /* @media(max-width: 1024px) {
      left: 270px !important;
    } */
  }

  .selectState {
    color: ${props => props.theme["gray-600"]};
  }

  .inputDate::-webkit-calendar-picker-indicator {
    display: none;
  }

  @media(max-width: 320px) {
    label {
      font-size: 1rem;
      padding-left: 0.75rem;
    }

    svg {
      top: 38px;
    }
  }

  @media(min-width: 600px) {
    label {
      padding-left: 28px;
      font-size: 24px;
      margin-bottom: 16px;
    }

    svg {
      top: 62px;
      left: 18px;
    }

    .eye {
      top: 66px;
      left: 460px;
    }
  }

  @media(min-width: 1024px) {
    .eye {
      top: 62px;
      left: 430px;
    }
  }

  @media(min-width: 1440px) {
    .eye {
      left: 540px;
    }
  }

  @media(min-width: 1920px) {
    .eye {
      left: 870px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2.625rem;
  padding-left: 2rem;
  border-radius: 8px;
  border: 2px solid ${props => props.theme["gray-400"]};
  background-color: transparent;
  color: ${props => props.theme["gray-600"]};

  &::placeholder {
    font-weight: normal;
    font-family: "Ubuntu", sans-serif;
    font-size: 1rem;
    color: ${props => props.theme["gray-500"]};
  }

  @media(max-width: 360px) {
    height: 2.5rem;
  }

  @media(max-width: 320px) {
    height: 2.25rem;

    &::placeholder {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 600px) {
    height: 60px;
    padding-left: 42px;

    &::placeholder {
      font-size: 24px;
    }
  }

  @media(min-width: 1024px) {
    height: 64px;
    padding-left: 54px;
    box-shadow: 0px 4px 10px 0px #00000040;

    &::placeholder {
      font-size: 20px;
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
  height: 42px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-inline: 5px;
  border: 2px solid transparent;
  border-radius: 8px;
  gap: 10px;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};

  p {
    flex: 1;
    font-size: 18px;
  }

  @media(min-width: 600px) {
    height: 60px;
    gap: 18px;

    p {
      font-size: 22px;
      font-weight: 500;
    }

    img {
      width: 36px;
    }
  }

  @media(min-width: 1024px) {
    height: 64px;
    gap: 20px;

    p {
      font-size: 24px;
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
  bottom: -94px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-inline: 16px;
  gap: 12px;
  background-color: ${props => props.theme["red-200"]};

  @media(min-width: 600px) {
    padding-inline: 36px;
    gap: 18px;
    bottom: -124px;
  }

  @media(min-width: 1024px) {
    padding-inline: 44px;
    gap: 20px;
    bottom: -140px;
  }
`;

export const SelectLi = styled.li`
  width: 100%;
  list-style: none;
  color: ${props => props.theme.white};

  &:hover {
    background-color: ${props => props.theme["red-300"]};
  }

  @media(min-width: 600px) {
    font-size: 20px;
    font-weight: 500;
  }

  @media(min-width: 1024px) {
    font-size: 24px;
  }
`;

export const AreaButton = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;