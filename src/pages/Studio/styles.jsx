import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media(max-width: 320px) {
    gap: 4px;
  }

  @media(min-width: 480px) {
    width: 500px;
    height: 100%;
    flex-direction: row;
    align-items: flex-start;
    gap: 24px;
  }

  @media(min-width: 1280px) {
    width: 1000px;
    gap: 64px;
    padding-top: 32px;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media(max-width: 320px) {
    gap: 4px;
  }

  @media(min-width: 480px) {
    gap: 6px;
  }

  @media(min-width: 1280px) {
    gap: 36px;
  }
`;

export const Info = styled.section`
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 20px;
  background-color: ${props => props.theme["gray-700"]};

  @media(max-width: 320px) {
    width: 250px;
    gap: 4px;
  }

  @media(min-width: 480px) {
    width: 250px;
    gap: 4px;
  }

  @media(min-width: 1280px) {
    width: 450px;
    gap: 36px;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  span {
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    margin-top: 6px;

    span {
      font-size: 12px;
    }
  }

  @media(min-width: 480px) {
    margin-top: 6px;

    span {
      font-size: 16px;
    }
  }

  @media(min-width: 1280px) {
    margin-top: 24px;

    span {
      font-size: 20px;
    }
  }
`;

export const UserImg = styled.div`
  width: 4.125rem;
  height: 4.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme["red-200"]};
  border-radius: 9999px;
  position: relative;

  div {
    width: 2rem;
    height: 4.125rem;
    position: absolute;
    top: -2px;
    left: -10px;
    z-index: 0;
    background-color: ${props => props.theme["gray-700"]};
  }

  img {
    z-index: 1;
    width: 3.5rem;
    border-radius: 9999px;
  }

  @media(max-width: 320px) {
    width: 3.125rem;
    height: 3.125rem;

    div {
      height: 3rem;
      top: -2px;
      left: -20px;
    }

    img {
      width: 2.5rem;
    }
  }

  @media(min-width: 480px) {
    width: 58px;
    height: 58px;

    div {
      height: 20px;
    }

    img {
      width: 24px;
    }
  }

  @media(min-width: 1280px) {
    width: 84px;
    height: 84px;

    div {
      height: 70px;
    }

    img {
      width: 72px;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media(max-width: 320px) {
    gap: 2rem;
  }

  @media(min-width: 480px) {
    gap: 32px;
  }

  @media(min-width: 1280px) {
    gap: 96px;
  }
`;

export const From = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: ${props => props.theme.white};

  img {
    width: 36px;
  }

  p {
    padding: 0.125rem 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    font-weight: 500;
    background-color: ${props => props.theme["red-200"]};
  }

  span {
    font-weight: 300;
  }

  @media(max-width: 320px) {
    gap: 8px;

    p {
      font-size: 12px;
    }

    span {
      font-size: 12px;
    }

    img {
      width: 32px;
    }
  }

  @media(min-width: 480px) {
    gap: 6px;

    img {
      width: 32px;
    }

    p {
      padding: 3px 6px;
      font-size: 14px;
      margin-bottom: 4px;
      border-radius: 4px;
    }

    span {
      font-size: 14px;
    }
  }

  @media(min-width: 1280px) {
    gap: 16px;

    img {
      width: 52px;
    }

    p {
      padding: 6px 10px;
      font-size: 16px;
      margin-bottom: 10px;
      border-radius: 6px;
    }

    span {
      font-size: 16px;
    }
  }
`;

export const SocialMedia = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-block: 0.75rem;
  color: ${props => props.theme.white};
  border-end-end-radius: 20px;
  border-end-start-radius: 20px;
  background-color: ${props => props.theme["red-200"]};

  img {
    width: 18px;
  }

  @media(max-width: 320px) {
    gap: 0.75rem;

    img {
      width: 16px;
    }
  }

  @media(min-width: 480px) {
    padding-block: 6px;
    gap: 12px;

    img {
      width: 20px;
    }
  }

  @media(min-width: 1280px) {
    padding-block: 20px;
    gap: 18px;

    img {
      width: 32px;
    }
  }
`;

export const Text = styled.section`
  text-align: center;
  color: ${props => props.theme["gray-700"]};

  p {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  span {
    display: block;
    font-weight: 400;
  }

  @media(max-width: 320px) {
    p {
      font-size: 0.875rem;
    }

    span {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 480px) {
    width: 280px;

    p {
      font-size: 16px;
      margin-bottom: 0px;
    }

    span {
      font-size: 14px;
    }
  }

  @media(min-width: 1280px) {
    width: 480px;

    p {
      font-size: 28px;
    }

    span {
      font-size: 24px;
    }
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media(min-width: 480px) {
    gap: 16px;
    height: 220px;
    justify-content: center;
  }

  @media(min-width: 1280px) {
    gap: 32px;
    height: 480px;
  }
`;

export const ButtonArea = styled.section`
  display: flex;
  gap: 2rem;

  button {
    all: unset;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    border-radius: 6px;
    background-color: ${props => props.theme["red-200"]};
    box-shadow: 0px 4px 4px 0px #00000040;
    transition: all ease 0.3s;

    img {
      width: 22px;
    }

    &:hover {
      scale: 1.05;
    }
  }

  @media(max-width: 320px) {
    gap: 1.5rem;

    button {
      width: 36px;
      height: 36px;

      img {
        width: 18px;
      }
    }
  }

  @media(min-width: 480px) {
    gap: 32px;

    button {
      width: 52px;
      height: 52px;

      img {
        width: 20px;
      }
    }
  }

  @media(min-width: 1280px) {
    gap: 52px;

    button {
      width: 100px;
      height: 100px;

      img {
        width: 36px;
      }
    }
  }
`;

export const ButtonRec = styled.button`
  all: unset;
  width: 220px;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;

  img {
    height: 24px;
  }

  .ruido {
    width: 70%;
  }

  &:hover {
    scale: 1.05;
  }

  @media(max-width: 320px) {
    width: 172px;
    height: 3rem;

    img {
      width: 18px;
    }
  }

  @media(min-width: 480px) {
    width: 223px;
    height: 52px;
    border-radius: 6px;
    gap: 10px;

    img {
      width: 28px;
      height: 32px;
    }

    .ruido {
      width: 130px;
      height: 52px;
    }
  }

  @media(min-width: 1280px) {
    width: 420px;
    height: 72px;
    gap: 16px;

    img {
      width: 54px;
      height: 42px;
    }

    .ruido {
      width: 220px;
    }
  }
`;