import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 220px;
  }

  @media(max-width: 320px) {
    img {
      width: 150px;
    }
  }

  @media(min-width: 480px) {
    gap: 16px;

    img {
      width: 150px;
    }
  }

  @media(min-width: 1280px) {
    img {
      width: 280px;
    }
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
`;

export const Button = styled.button`
  all: unset;
  width: 220px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["red-200"]};
  border-radius: 8px;
  border: 2px solid ${props => props.theme["red-300"]};
  border-bottom-width: 4px;
  cursor: pointer;

  p {
    font-weight: 500;
    font-size: 20px;
  }

  @media(max-width: 320px) {
    width: 150px;
    height: 32px;

    p {
      font-size: 16px;
    }
  }

  @media(min-width: 480px) {
    width: 150px;
    height: 32px;
    border-radius: 6px;

    p {
      font-size: 16px;
    }
  }

  @media(min-width: 1280px) {
    width: 280px;
    height: 56px;

    p {
      font-size: 24px;
    }
  }
`;