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
    gap: 0.25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 32.25rem;
      height: 100%;
      flex-direction: row;
      align-items: flex-start;
      gap: 1.5rem;
    }
  }

  @media(min-width: 1280px) {
    width: 62.5rem;
    gap: 4rem;
    padding-top: 2rem;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 480px) {
      gap: 0.375rem;
    }
  }

  @media(min-width: 1280px) {
    gap: 2.25rem;
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
    width: 15.625rem;
    gap: 0.25rem;
  }

  @media(min-width: 768px) {
    width: 25rem;
    gap: 0.25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 15.625rem;
      gap: 0.25rem;
    }
  }

  @media(min-width: 1280px) {
    width: 28.125rem;
    gap: 2.25rem;
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
    margin-top: 0.375rem;

    span {
      font-size: 0.75rem;
    }
  }

  @media(min-width: 768px) {
    margin-top: 1.5rem;

    span {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 480px) {
      margin-top: 0.375rem;

      span {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 1280px) {
    margin-top: 1.5rem;

    span {
      font-size: 1.25rem;
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

  @media(min-width: 768px) {
    width: 5.25rem;
    height: 5.25rem;

    div {
      height: 4.375rem;
    }

    img {
      width: 72px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 3.625rem;
      height: 3.625rem;

      div {
        height: 1.25rem;
      }

      img {
        width: 48px;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 5.25rem;
    height: 5.25rem;

    div {
      height: 4.375rem;
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

  @media(min-width: 768px) {
    gap: 4rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 480px) {
      gap: 2rem;
    }
  }

  @media(min-width: 1280px) {
    gap: 6rem;
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
    gap: 0.5rem;

    p {
      font-size: 0.75rem;
    }

    span {
      font-size: 0.75rem;
    }

    img {
      width: 32px;
    }
  }

  @media(min-width: 768px) {
    gap: 1rem;

    img {
      width: 52px;
    }

    p {
      padding: 0.375rem 0.625rem;
      font-size: 1.25rem;
      margin-bottom: 10px;
      border-radius: 6px;
    }

    span {
      font-size: 1.25rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.375rem;

      img {
        width: 32px;
      }

      p {
        padding: 0.1875rem 0.375rem;
        font-size: 0.875rem;
        margin-bottom: 4px;
        border-radius: 4px;
      }

      span {
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1280px) {
    gap: 1rem;

    img {
      width: 52px;
    }

    p {
      padding: 0.375rem 0.625rem;
      font-size: 1rem;
      margin-bottom: 10px;
      border-radius: 6px;
    }

    span {
      font-size: 1rem;
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

  @media(min-width: 768px) {
    padding-block: 1.25rem;
    gap: 1.125rem;

    img {
      width: 32px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-block: 0.375rem;
      gap: 0.75rem;

      img {
        width: 20px;
      }
    }
  }

  @media(min-width: 1280px) {
    padding-block: 1.25rem;
    gap: 1.125rem;

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
    font-weight: normal;
  }

  @media(max-width: 320px) {
    p {
      font-size: 0.875rem;
    }

    span {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    width: 30rem;

    p {
      font-size: 1.75rem;
    }

    span {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 17.5rem;

      p {
        font-size: 1rem;
        margin-bottom: 0px;
      }

      span {
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 30rem;

    p {
      font-size: 1.75rem;
    }

    span {
      font-size: 1.5rem;
    }
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media(min-width: 768px) {
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 1rem;
      height: 220px;
      justify-content: center;
    }
  }

  @media(min-width: 1280px) {
    gap: 2rem;
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
      width: 2.25rem;
      height: 2.25rem;

      img {
        width: 18px;
      }
    }
  }

  @media(min-width: 768px) {
    gap: 3.25rem;

    button {
      width: 5rem;
      height: 5rem;

      img {
        width: 32px;
      }
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 2rem;

      button {
        width: 3.25rem;
        height: 3.25rem;

        img {
          width: 20px;
        }
      }
    }
  }

  @media(min-width: 1280px) {
    gap: 3.25rem;

    button {
      width: 6.25rem;
      height: 6.25rem;

      img {
        width: 36px;
      }
    }
  }
`;

export const ButtonRec = styled.button`
  all: unset;
  width: 13.75rem;
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
    width: 10.75rem;
    height: 3rem;

    img {
      width: 18px;
    }
  }

  @media(min-width: 768px) {
    width: 26rem;
    height: 3.5rem;
    gap: 1rem;

    img {
      width: 54px;
      height: 42px;
    }

    .ruido {
      width: 13rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 15rem;
      height: 3.25rem;
      border-radius: 6px;
      gap: 10px;

      img {
        width: 28px;
        height: 32px;
      }

      .ruido {
        width: 8.125rem;
        height: 3.25rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 26.25rem;
    height: 3.5rem;
    gap: 1rem;

    img {
      width: 54px;
      height: 42px;
    }

    .ruido {
      width: 13.75rem;
    }
  }
`;