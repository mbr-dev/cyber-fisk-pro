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
  width: 21rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);

  @media(max-width: 360px) {
    width: 20rem;
  }

  @media(max-width: 320px) {
    width: 18rem;
  }

  @media(min-width: 768px) {
    width: 31.25rem;
    height: 500px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 31.25rem;
      height: 15.625rem;
    }
  }

  @media(min-width: 1280px) {
    width: 40rem;
    height: 31.25rem;
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
  top: -0.75rem;
  right: -0.75rem;
  background-color: ${props => props.theme["red-200"]};
  border-radius: 9999px;

  img {
    width: 18px;
  }

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
    top: -0.5rem;
    right: -0.5rem;

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
      top: -0.5rem;
      right: -0.5rem;

      img {
        width: 14px;
      }
    }
  }

  @media(min-width: 1280px) {
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
  margin-bottom: -1rem;
  width: 12rem;
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

  @media(min-width: 768px) {
    width: 18.75rem;
    height: 2.75rem;
    font-size: 1.5rem;
    margin-bottom: -1.25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 12rem;
      height: 2rem;
      font-size: 1rem;
    }
}

  @media(min-width: 1280px) {
    width: 18.75rem;
    height: 2.75rem;
    font-size: 2rem;
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

  @media(min-width: 768px) {
    font-size: 2rem;
    padding-block: 1rem;

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 480px) {
      font-size: 24px;
      padding-block: 0.5rem;

      p {
        font-size: 1.5rem;
      }
    }
  }

  @media(min-width: 1280px) {
    font-size: 2rem;
    padding-block: 1rem;
  }
`;

export const Main = styled.main`
  width: 100%;
  padding: 1.5rem;
  padding-right: 3rem;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme["gray-700"]};
  
  p {
    font-weight: 700;
  }
  
  span {
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  @media(max-width: 320px) {
    padding: 1rem;
    padding-right: 2rem;

    p {
      font-size: 0.875rem;
    }

    span {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    gap: 1.5rem;
    height: 31.25rem;

    p {
      font-size: 1.75rem;
    }

    span {
      font-size: 1.5rem
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      padding: 1rem;
      padding-right: 0;
      height: 11.375rem;

      p {
        font-size: 1.25rem;
      }

      span {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 1280px) {
    gap: 1.5rem;
    height: 31.25rem;

    p {
      font-size: 2rem;
    }

    span {
      font-size: 1.5rem
    }
  }
`;