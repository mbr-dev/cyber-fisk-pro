import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  width: 21rem;
  height: 390px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);

  .bgModal {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  @media(max-width: 360px) {
    width: 20rem;
    height: 23rem;
  }

  @media(max-width: 320px) {
    width: 18rem;
    height: 21rem;
  }

  @media(min-width: 480px) {
    height: 300px;
  }

  @media(min-width: 1280px) {
    width: 500px;
    height: 650px;
  }

  @media(min-width: 1440px) {
    width: 700px;
    height: 732px;
  }
`;

export const Close = styled(Dialog.Close)`
  all: unset;
  position: absolute;
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -15px;
  right: -10px;
  background-color: ${props => props.theme["red-200"]};
  border-radius: 9999px;

  img {
    width: 16px;
  }

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media(min-width: 480px) {
    width: 32px;
    height: 32px;
    top: -18px;
    right: -10px;
  }

  @media (min-width: 1280px) {
    width: 64px;
    height: 64px;
    top: -30px;
    right: -30px;
    
    img {
      width: 32px;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .bgMoney {
    width: 280px;
    position: absolute;
    z-index: 1;
    top: 0;
  }

  @media (min-width: 1280px) {
    .bgMoney {
      width: 500px;
    }
  }

  @media (min-width: 1440px) {
    .bgMoney {
      width: 650px;
    }
  }
`;

export const Position = styled.div`
  width: 10rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${props => props.theme["blue-800"]};
  margin-top: -146px;

  p {
    font-size: 1.25rem;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    margin-top: -21px;
  }

  @media(min-width: 480px) {
    margin-top: -120px;
  }

  @media(min-width: 1280px) {
    width: 250px;
    height: 48px;
    margin-top: -290px;

    p {
      font-size: 32px;
    }
  }

  @media(min-width: 1440px) {
    margin-top: -334px;
  }
`;

export const Reward = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 480px) {
    gap: 10px;
  }

  @media (min-width: 1280px) {
    gap: 16px;
  }
`;

export const Receive = styled.div`
  width: 13rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 8px;
  background-color: ${props => props.theme.white};
  position: relative;

  img {
    width: 30%;
    position: absolute;
    left: -40px;
  }

  p {
    font-size: 1.25rem;
    padding-right: 0.5rem;
    color: ${props => props.theme["gray-700"]};
  }

  span {
    font-size: 1.25rem;
    color: ${props => props.theme["red-200"]};
  }

  @media(max-width: 320px) {
    width: 12rem;
    height: 2rem;

    img {
      width: 25%;
      left: -15px;
    }

    p {
      font-size: 1rem;
      padding-right: 0.75rem;
    }

    span {
      font-size: 1rem;
    }
  }

  @media(min-width: 480px) {
    width: 12rem;
    height: 2rem;

    img {
      width: 25%;
      left: -15px;
    }

    p {
      font-size: 1rem;
      padding-right: 20px;
    }

    span {
      font-size: 1rem;
    }
  }

  @media(min-width: 1280px) {
    width: 300px;
    height: 52px;

    img {
      width: 25%;
      left: -4px;
    }

    p {
      font-size: 24px;
      padding-right: 20px;
    }

    span {
      font-size: 24px;
    }
  }
`;

export const Boost = styled.div`
  width: 250px;
  height: 4rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid ${props => props.theme["red-300"]};
  border-bottom: 5px solid ${props => props.theme["red-300"]};
  background-color: ${props => props.theme["red-200"]};
  cursor: pointer;
  z-index: 1000;

  p {
    font-size: 1.25rem;
    padding-right: 0.5rem;
    color: ${props => props.theme.white};
  }

  &:hover {
    background-color: ${props => props.theme["red-300"]};
  }

  @media(max-width: 320px) {
    width: 14rem;
    height: 3.5rem;
    justify-content: center;
    border-bottom: 4px solid ${props => props.theme["red-300"]};

    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 480px) {
    width: 14rem;
    height: 58px;
    justify-content: center;

    p {
      font-size: 1rem;
    }

    span {
      font-size: 1rem;
    }
  }

  @media(min-width: 1280px) {
    width: 320px;
    height: 92px;
    gap: 16px;
    border-radius: 12px;
    justify-content: center;
    
    p {
      font-size: 24px;
    }
  }

  @media(min-width: 1440px) {
    width: 420px;
    gap: 32px;
    height: 132px;
  }
`;

export const MiniAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.white};
  overflow: hidden;

  @media (min-width: 1280px) {
    width: 72px;
    height: 72px;
  }

  @media (min-width: 1440px) {
    width: 100px;
    height: 100px;
  }
`;