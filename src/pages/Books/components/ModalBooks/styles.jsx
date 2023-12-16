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
    gap: 16px;

    img {
      width: 150px;
    }
  }

  @media(min-width: 768px) {
    gap: 32px;

    img {
      width: 300px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
    gap: 16px;

    img {
      width: 142px;
    }
  }
  }

  @media(min-width: 1024px) {
    gap: 32px;

    img {
      width: 300px;
    }
  }
`;

export const Close = styled(Dialog.Close)`
  all: unset;
  position: absolute;
  width: 28px;
  height: 28px;
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
    top: -12px;
    right: -8px;

    img {
      width: 12px;
    }
  }

  @media(min-width: 768px) {
    width: 52px;
    height: 52px;
    top: -28px;
    right: -24px;

    img {
      width: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 1.5rem;
      height: 1.5rem;
      top: -14px;
      right: -0px;

      img {
        width: 12px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 52px;
    height: 52px;
    top: -28px;
    right: -24px;

    img {
      width: 24px;
    }
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

  @media(min-width: 768px) {
    width: 300px;
    height: 56px;

    p {
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 142px;
      height: 32px;

      p {
        font-size: 16px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 300px;
    height: 56px;

    p {
      font-size: 24px;
    }
  }
`;