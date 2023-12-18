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

  @media(min-width: 768px) {
    width: 31.25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 28.125rem;
    }
  }

  @media(min-width: 1024px) {
    width: 700px;
  }

  @media(min-width: 1366px) {
    width: 900px;
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
  top: -16px;
  right: -16px;
  background-color: ${props => props.theme["red-200"]};
  border-radius: 9999px;

  img {
    width: 16px;
  }

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
    top: -10px;
    right: -10px;
  }

  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
    top: -1.875rem;
    right: -1.875rem;
    
    img {
      width: 32px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 2rem;
      height: 2rem;
      top: -1.125rem;
      right: -0.625rem;

      img {
        width: 16px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 4rem;
    height: 4rem;
    top: -1.875rem;
    right: -1.875rem;
    
    img {
      width: 32px;
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

  @media(min-width: 768px) {
    height: 3.25rem;
    width: 18.75rem;
    font-size: 2rem;
    margin-bottom: -1.75rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 8rem;
      height: 2rem;
      font-size: 1rem;
      margin-bottom: -1rem;
    }
  }

  @media(min-width: 1024px) {
    height: 3.25rem;
    width: 18.75rem;
    font-size: 2rem;
    margin-bottom: -1.75rem;
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

  @media(min-width: 768px) {
    padding-block: 0.75rem;

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-block: 0.5rem;
      
      p {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 1024px) {
    padding-block: 0.75rem;

    p {
      font-size: 2rem;
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

  @media(min-width: 768px) {
    p {
      font-size: 2rem;
    }

    span {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-inline: 0;
      margin-top: 0;
      padding-bottom: 0;
      gap: 0px;

      p {
        font-size: 0.75rem;
        font-weight: 700;
      }

      span {
        font-size: 0.75rem;
      }
    }
  }

  @media(min-width: 1024px) {
    p {
      font-size: 2rem;
    }

    span {
      font-size: 2rem;
    }
  }
`;

export const Text = styled.div`
  padding-inline: 2rem;

  p {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 1024px) {
    p {
      margin-bottom: 1.5rem;
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

  @media (min-width: 768px) {
    padding-block: 1rem;
    margin-block: 1rem;

    h2 {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-block: 0.375rem;
      margin-block: 0.375rem;

      h2 {
        font-size: 1.25rem;
      }
    }
  }

  @media (min-width: 1024px) {
    padding-block: 1rem;
    margin-block: 1rem;

    h2 {
      font-size: 2rem;
    }
  }
`;