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
  gap: 24px;

  @media(max-width: 320px) {
    gap: 16px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 600px;
      height: 100%;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0;
    }
  }

  @media(min-width: 1024px) {
    width: 900px;
    padding-top: 24px;
  }

  @media(min-width: 1366px) {
    width: 1100px;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media(max-width: 320px) {
    gap: 8px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 6px;
    }
  }

  @media(min-width: 1024px) {
    gap: 16px;
  }

  @media(min-width: 1366px) {
    gap: 24px;
  }
`;

export const Info = styled.section`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border-radius: 20px;
  background-color: ${props => props.theme["gray-700"]};

  @media(max-width: 320px) {
    width: 250px;
    gap: 8px;
  }

  @media(min-width: 768px) {
    width: 450px;
    gap: 16px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 280px;
      gap: 4px;
    }
  }

  @media(min-width: 1024px) {
    width: 400px;
    gap: 24px;
  }

  @media(min-width: 1366px) {
    width: 450px;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 16px;

  span {
    font-size: 16px;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    gap: 6px;
    margin-top: 10px;

    span {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    gap: 12px;
    margin-top: 20px;

    span {
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 6px;
      margin-top: 10px;

      span {
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 12px;
    margin-top: 20px;

    span {
      font-size: 24px;
    }
  }
`;

export const UserImg = styled.div`
  width: 66px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme["red-200"]};
  border-radius: 9999px;
  position: relative;

  div {
    width: 32px;
    height: 66px;
    position: absolute;
    top: -2px;
    left: -10px;
    z-index: 0;
    background-color: ${props => props.theme["gray-700"]};
  }

  img {
    z-index: 1;
    width: 56px;
    border-radius: 9999px;
  }

  @media(max-width: 320px) {
    width: 50px;
    height: 50px;

    div {
      height: 48px;
      top: -2px;
      left: -20px;
    }

    img {
      width: 40px;
    }
  }

  @media(min-width: 768px) {
    width: 84px;
    height: 84px;

    div {
      height: 70px;
    }

    img {
      width: 72px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 42px;
      height: 42px;

      div {
        width: 24px;
        height: 32px;
      }

      img {
        width: 34px;
      }
    }
  }

  @media(min-width: 1024px) {
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
  width: 84%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const From = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${props => props.theme.white};

  img {
    width: 36px;
  }

  p {
    padding: 2px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    font-weight: 500;
    font-size: 16px;
    background-color: ${props => props.theme["red-200"]};
  }

  span {
    font-size: 14px;
    font-weight: normal;
  }

  @media(max-width: 320px) {
    gap: 6px;

    p {
      padding: 2px 4px;
      font-size: 14px;
    }

    span {
      font-size: 12px;
    }

    img {
      width: 32px;
    }
  }

  @media(min-width: 768px) {
    gap: 10px;

    p {
      padding: 4px 8px;
      font-size: 24px;
    }

    span {
      font-size: 24px;
    }

    img {
      width: 56px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 6px;

      p {
        padding: 2px 4px;
        font-size: 14px;
      }

      span {
        font-size: 12px;
      }

      img {
        width: 32px;
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 10px;

    p {
      padding: 4px 8px;
      font-size: 18px;
    }

    span {
      font-size: 18px;
    }

    img {
      width: 56px;
    }
  }
`;

export const SocialMedia = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding-block: 10px;
  color: ${props => props.theme.white};
  border-end-end-radius: 20px;
  border-end-start-radius: 20px;
  background-color: ${props => props.theme["red-200"]};

  img {
    width: 24px;
  }

  @media(max-width: 320px) {
    padding-block: 10px;
    gap: 12px;

    img {
      width: 18px;
    }
  }

  @media(min-width: 768px) {
    gap: 24px;
    padding-block: 14px;

    img {
      width: 28px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-block: 8px;
      gap: 12px;

      img {
        width: 18px;
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 24px;
    padding-block: 14px;

    img {
      width: 28px;
    }
  }
`;

export const Text = styled.section`
  text-align: center;
  color: ${props => props.theme["gray-700"]};

  p {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  span {
    font-size: 16px;
    display: block;
    font-weight: normal;
  }

  @media(max-width: 320px) {
    p {
      font-size: 14px;
      margin-bottom: 4px;
    }
    
    span {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    p {
      font-size: 24px;
      margin-bottom: 8px;
    }
    
    span {
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      p {
        font-size: 14px;
        margin-bottom: 4px;
      }
      
      span {
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    p {
      font-size: 24px;
      margin-bottom: 8px;
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
  gap: 24px;

  .hasBorder {
    border-color: ${props => props.theme["red-200"]};
  }

  @media(max-width: 320px) {
    gap: 8px;
  }

  @media(min-width: 768px) {
    gap: 32px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 80%;
      gap: 24px;
      justify-content: center;
    }
  }

  @media(min-width: 1024px) {
    gap: 32px;
  }
`;

export const ButtonArea = styled.section`
  width: 250px;
  display: flex;
  justify-content: space-between;

  .hasBorder {
    border-color: ${props => props.theme["gray-700"]};
  }

  button {
    all: unset;
    width: 48px;
    height: 48px;
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

    .microImg {
      width: 32px;
    }

    &:hover {
      scale: 1.05;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }
  }

  @media(max-width: 320px) {
    width: 180px;

    button {
      width: 36px;
      height: 36px;

      img {
        width: 18px;
      }

      .microImg {
        width: 28px;
      }
    }
  }

  @media(min-width: 768px) {
    width: 400px;

    button {
      width: 80px;
      height: 80px;
      border-radius: 8px;

      img {
        width: 32px;
      }

      .microImg {
        width: 48px;
      }
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 250px;

      button {
        width: 3.25rem;
        height: 3.25rem;

        img {
          width: 20px;
        }

        .microImg {
          width: 30px;
        }
      }
    }
  }

  @media(min-width: 1024px) {
    width: 400px;

    button {
      width: 6.25rem;
      height: 6.25rem;

      img {
        width: 36px;
      }

      .microImg {
        width: 54px;
      }
    }
  }
`;

export const Hide = styled.div`
  display: none;
`;

export const ButtonRec = styled.button`
  all: unset;
  width: 250px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-inline: 10px;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;

  img {
    height: 24px;
  }

  .hasBorder {
    border-color: ${props => props.theme["red-200"]};
  }

  .ruido {
    width: 70%;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media(max-width: 320px) {
    width: 180px;
    height: 3rem;

    img {
      width: 18px;
    }
  }

  @media(min-width: 768px) {
    width: 380px;
    height: 92px;
    gap: 1rem;

    img {
      width: 44px;
      height: 44px;
    }

    .ruido {
      width: 250px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 220px;
      height: 54px;
      border-radius: 6px;

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

  @media(min-width: 1024px) {
    width: 380px;
    height: 92px;
    gap: 32px;

    img {
      width: 44px;
      height: 44px;
    }

    .ruido {
      width: 250px;
    }
  }
`;