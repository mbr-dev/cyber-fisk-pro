import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  width: 280px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  padding-bottom: 16px;
  transform: translate(-50%, -50%);

  @media(max-width: 320px) {
    width: 18rem;
    padding-bottom: 10px;
  }

  @media(min-width: 768px) {
    width: 500px;
    padding-bottom: 16px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 600px;
      padding-bottom: 10px;
    }
  }

  @media(min-width: 1024px) {
    width: 600px;
    padding-bottom: 24px;
  }

  @media(min-width: 1366px) {
    width: 600px;
  }
`;

export const Close = styled(Dialog.Close)`
  all: unset;
  position: absolute;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -16px;
  right: -16px;
  background-color: ${props => props.theme["red-200"]};
  border-radius: 9999px;

  img {
    width: 18px;
  }

  @media(max-width: 320px) {
    img {
      width: 14px;
    }
  }

  @media(min-width: 768px) {
    width: 3rem;
    height: 3rem;
    top: -1.5rem;
    right: -1.5rem;

    img {
      width: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 2rem;
      height: 2rem;
      top: -16px;
      right: -16px;

      img {
        width: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 3.25rem;
    height: 3.25rem;
    top: -1.75rem;
    right: -1.5rem;

    img {
      width: 28px;
    }
  }
`;

export const CloseEnter = styled(Dialog.Close)`
  all: unset;
  width: 200px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["blue-300"]};
  border: 2px solid ${props => props.theme["blue-200"]};
  border-radius: 8px;
  border-bottom-width: 4px;
  font-size: 18px;

  @media(max-width: 320px) {
    width: 180px;
    height: 32px;
    font-size: 18px;
  }

  @media(min-width: 768px) {
    width: 18.75rem;
    height: 48px;
    font-size: 32px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 12rem;
      height: 2rem;
      font-size: 1rem;
    }
}

  @media(min-width: 1024px) {
    width: 18.75rem;
    height: 48px;
    font-size: 32px;
  }
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding-block: 0.5rem;
  background-color: ${props => props.theme["blue-300"]};
  border: 2px solid ${props => props.theme["blue-200"]};
  border-end-end-radius: 8px;
  border-end-start-radius: 8px;

  p {
    font-size: 20px;
    color: ${props => props.theme.white};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props => props.theme["blue-200"]};
  }

  @media(max-width: 320px) {
    p {
      font-size: 18px;
    }
  }

  @media(min-width: 768px) {
    padding-block: 1rem;

    p {
      font-size: 32px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-block: 0.5rem;

      p {
        font-size: 18px;
      }
    }
  }

  @media(min-width: 1024px) {
    padding-block: 1rem;

    p {
      font-size: 32px;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  color: ${props => props.theme["gray-700"]};
  
  p {
    font-size: 16px;
    font-weight: 700;
  }
  
  span {
    font-size: 14px;
    font-weight: normal;
  }

  @media(max-width: 320px) {
    padding: 12px;

    p {
      font-size: 14px;
      font-weight: 700;
    }

  }

  @media(min-width: 768px) {
    gap: 8px;

    p {
      font-size: 24px;
    }
    
    span {
      font-size: 20px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 3px;
      align-items: center;
      padding: 6px;
      text-align: left;

      p {
        font-size: 14px;
      }

      span {
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    padding: 16px;
    gap: 4px;
  
    p {
      font-size: 24px;
    }

    span {
      font-size: 20px
    }
  }
`;