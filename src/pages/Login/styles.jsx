  import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(min-width: 480px) {
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

  .buddyImg {
    display: none;
  }

  @media(max-width: 320px) {
    padding-block: 12px;
    
    .logoFisk {
      width: 130px;
    }
  }

  @media(min-width: 480px) {
    width: 40%;
    height: 100vh;
    border-end-end-radius: 0;
    border-end-start-radius: 0;
    flex-direction: column;
    gap: 16px;

    .logoFisk {
      width: 150px;
    }

    .buddyImg {
      display: block;
      width: 150px;
    }
  }

  @media(min-width: 1280px) {
    gap: 20px;

    .logoFisk {
      width: 300px;
    }

    .buddyImg {
      width: 420px;
    }
  }
`;

export const FooterBlue = styled.header`
  display: none;

  @media(min-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    p {
      color: ${props => props.theme.white};
      font-size: 14px;
      font-weight: normal;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;

      img {
        width: 32px;
      }
    }
  }

  @media(min-width: 1280px) {
    gap: 20px;

    p {
      font-size: 20px;
    }

    div {
      gap: 32px;

      img {
        width: 56px;
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

  @media (min-width: 480px) {
    width: 60%;
    gap: 16px;
  }

  @media (min-width: 1280px) {
    gap: 32px;
  }
`;

export const Form = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  gap: 16px;

  @media(max-width: 320px) {
    padding-top: 8px;
    width: 250px;
    gap: 8px;
  }

  @media (min-width: 480px) {
    width: 350px;
    gap: 8px;
  }

  @media(min-width: 1280px) {
    width: 600px;
    gap: 16px;
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

  @media(max-width: 320px) {
    label {
      font-size: 1rem;
      padding-left: 0.75rem;
    }
  }

  @media(min-width: 480px) {
    label {
      padding-left: 12px;
      font-size: 16px;
      margin-bottom: 6px;
    }
  }

  @media(min-width: 1280px) {
    label {
      padding-left: 24px;
      font-size: 24px;
      margin-bottom: 16px;
    }
  }
`;

export const DivInput = styled.div`
  position: relative;

  img {
    width: 14px;
    position: absolute;
    top: 12px;
    left: 8px;
    color: ${props => props.theme["gray-400"]};
  }

  .userImg {
    width: 20px;
  }

  .eye {
    position: absolute;
    top: 10px;
    right: 16px;
    color: ${props => props.theme["gray-400"]};
  }

  @media (max-width: 320px) {
    img {
      top: 8px;
    }

    .userImg {
      width: 24px;
    }
  }

  @media (min-width: 480px) {
    img {
      top: 8px;
      left: 12px;
    }

    .eye {
      top: 8px;
      right: 20px;
    }
  }

  @media (min-width: 1280px) {
    img {
      width: 20px;
      top: 18px;
      left: 16px;
    }

    .userImg {
      width: 28px;
    }

    .eye {
      top: 16px;
      right: 24px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
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

  @media(max-width: 320px) {
    height: 36px;

    &::placeholder {
      font-size: 0.875rem;
    }
  }

  @media (min-width: 480px) {
    height: 36px;
  }

  @media(min-width: 1280px) {
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

  @media(min-width: 480px) {
    height: 36px;
    gap: 8px;

    p {
      font-size: 14px;
      font-weight: 500;
    }

    img {
      width: 20px;
    }
  }

  @media(min-width: 1280px) {
    height: 64px;
    gap: 16px;

    p {
      font-size: 24px;
    }

    img {
      width: 32px;
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
    padding-inline: 24px;
    gap: 16px;
    bottom: -94px;
  }

  @media(min-width: 1280px) {
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

  @media(min-width: 480px) {
    font-size: 14px;
    font-weight: 500px;
  }

  @media(min-width: 1280px) {
    font-size: 24px;
  }
`;

export const AreaButton = styled.div`
  width: 320px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid ${props => props.theme["gray-200"]};

  @media (max-width: 320px) {
    width: 250px;
    height: 56px;
  }

  @media (min-width: 1280px) {
    width: 600px;
    height: 96px;
    border-top-width: 4px;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 250px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["green-600"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme["green-700"]};
  border-bottom-width: 4px;
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  p {
    font-size: 24px;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 320px) {
    width: 200px;
    height: 32px;

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 480px) {
    height: 32px;
    border-radius: 6px;

    p {
      font-size: 18px;
    }
  }

  @media(min-width: 1280px) {
    width: 400px;
    height: 44px;

    p {
      font-size: 32px;
    }
  }
`;

export const FooterArea = styled.div`
  @media (min-width: 480px) {
    display: none;
  }
`;