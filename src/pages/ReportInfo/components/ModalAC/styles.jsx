import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 100;
`;

export const Content = styled(Dialog.Content)`
  width: 21rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  @media(max-width: 360px) {
    width: 20rem;
  }

  @media(max-width: 320px) {
    width: 18rem;
  }

  @media(min-width: 480px) {
    width: 450px;
  }

  @media(min-width: 1280px) {
    width: 1000px;
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
    right: -16px;
  }

  @media(min-width: 1280px) {
    width: 64px;
    height: 64px;
    top: -32px;
    right: -32px;

    img {
      width: 28px;
    }
  }
`;

export const CloseEnter = styled(Dialog.Close)`
  all: unset;
  margin-bottom: -1rem;
  width: 8rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["blue-300"]};
  border: 2px solid ${props => props.theme["blue-200"]};
  border-radius: 8px;
  border-bottom-width: 4px;

  @media(max-width: 320px) {
    height: 1.75rem;
  }

  @media(min-width: 1280px) {
    height: 52px;
    width: 300px;
    font-size: 32px;
    margin-bottom: -28px;
  }
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding-block: 0.75rem;
  background-color: ${props => props.theme["blue-300"]};
  border: 2px solid ${props => props.theme["blue-200"]};
  border-end-end-radius: 8px;
  border-end-start-radius: 8px;

  p {
    font-size: 1.5rem;
    color: ${props => props.theme.white};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props => props.theme["blue-200"]};
  }

  @media(max-width: 360px) {
    padding-block: 0.5rem;
  }

  @media(max-width: 320px) {
    font-size: 1rem;
  }

  @media(min-width: 480px) {
    padding-block: 8px;
    
    p {
      font-size: 16px;
    }
  }

  @media(min-width: 1280px) {
    padding-block: 12px;

    p {
      font-size: 32px;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding-block: 1.5rem;
  
  p {
    font-weight: 500;
  }

  span {
    font-weight: normal;
  }

  @media(max-width: 360px) {
    padding-inline: 1rem;
    padding-bottom: 2rem;
  }

  @media(max-width: 320px) {
    padding-inline: 0.5rem;
    margin-top: 0.5rem;
    padding-bottom: 1rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 480px) {
    padding-inline: 0;
    margin-top: 0;
    padding-bottom: 0;
    gap: 0px;

    p {
      font-size: 12px;
      font-weight: 700;
    }

    span {
      font-size: 12px;
    }
  }

  @media(min-width: 1280px) {
    padding-inline: 0;
    margin-top: 0;
    padding-bottom: 0;
    gap: 0px;

    p {
      font-size: 32px;
    }

    span {
      font-size: 32px;
    }
  }
`;

export const Text = styled.div`
  padding-inline: 2rem;

  p {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 1280px) {
    p {
      margin-bottom: 24px;
    }
  }
`;

export const Separator = styled.div`
  width: 100%;
  text-align: center;
  background-color: ${props => props.theme["gray-200"]};
  padding-block: 0.5rem;
  margin-block: 1rem;

  h2 {
    font-size: 1.5rem;
  }

  @media (min-width: 480px) {
    padding-block: 6px;
    margin-block: 6px;

    h2 {
      font-size: 20px;
    }
  }

  @media (min-width: 1280px) {
    padding-block: 16px;
    margin-block: 16px;

    h2 {
      font-size: 32px;
    }
  }
`;