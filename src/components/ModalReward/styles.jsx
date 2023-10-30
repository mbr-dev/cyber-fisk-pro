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
  height: 24rem;
  background: ${props => props.theme["gradient-blue"]};
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

  @media(max-width: 360px) {
    width: 20rem;
    height: 23rem;
  }

  @media(max-width: 320px) {
    width: 18rem;
    height: 21rem;
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
  top: -0.5rem;
  right: -0.5rem;
  background-color: ${props => props.theme["red-200"]};
  border-radius: 9999px;

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
    top: -0.5rem;
    right: -0.5rem;
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
    width: 90%
  }

  .avatarImg {
    position: absolute;
    width: 45%;
    top: 35px;
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
  margin-top: -28px;

  p {
    font-size: 1.25rem;
    color: ${props => props.theme.white};
  }

  @media(max-width: 360px) {
    margin-top: -26px;
  }

  @media(max-width: 320px) {
    margin-top: -21px;
  }
`;

export const Reward = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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
`;

export const Boost = styled.div`
  width: 15rem;
  height: 4rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid ${props => props.theme["red-300"]};
  border-bottom: 5px solid ${props => props.theme["red-300"]};
  background-color: ${props => props.theme["red-200"]};

  p {
    font-size: 1.25rem;
    padding-right: 0.5rem;
    color: ${props => props.theme.white};
  }

  span {
    font-size: 1.25rem;
    color: ${props => props.theme["red-200"]};
  }

  @media(max-width: 320px) {
    width: 14rem;
    height: 3.5rem;
    justify-content: center;
    border-bottom: 4px solid ${props => props.theme["red-300"]};

    p {
      font-size: 1rem;
    }

    span {
      font-size: 1rem;
    }
  }
`;

export const MiniAvatar = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 2px solid ${props => props.theme["red-300"]};
  background-color: ${props => props.theme.white};

  img {
    width: 100%;
  }

  @media(max-width: 320px) {
    width: 2.75rem;
    height: 2.75rem;
    border-bottom: 4px solid ${props => props.theme["red-300"]};
  }
`;