import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 150;
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
  z-index: 151;
  transform: translate(-50%, -50%);

  @media(max-width: 360px) {
    width: 20rem;
  }

  @media(max-width: 320px) {
    width: 18rem;
  }

  @media(min-width: 768px) {
    width: 30rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 21rem;
    }
  }

  @media(min-width: 1280px) {
    width: 32rem;
  }
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding-block: 0.75rem;
  background-color: ${props => props.theme["gray-700"]};
  border: 2px solid ${props => props.theme.black};
  border-end-end-radius: 8px;
  border-end-start-radius: 8px;

  p {
    font-size: 1.5rem;
    color: ${props => props.theme.white};
  }

  @media(max-width: 360px) {
    padding-block: 0.5rem;
  }

  @media(max-width: 320px) {
    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 768px) {
    padding-block: 1rem;

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

  @media(min-width: 1280px) {
    p {
      font-size: 2rem;
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
  top: -0.9375;
  right: -0.625rem;
  background-color: ${props => props.theme["red-200"]};
  border-radius: 9999px;

  img {
    width: 16px;
  }

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
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

  @media (min-width: 1280px) {
    width: 4rem;
    height: 4rem;
    top: -1.875rem;
    right: -1.875rem;
    
    img {
      width: 32px;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-block: 0.625rem;

  @media(min-width: 768px) {
    margin-block: 1rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      margin-block: 0.625rem;
    }
  }

  @media(min-width: 1280px) {
    margin-block: 1rem;
  }
`;

export const SelectLanguage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media(max-width: 320px) {
    gap: 1.5rem;
  }
`;

export const ButtonFlag = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 6px;
  transition: all ease 0.3s;

    img {
      width: 36px;
    }

    &:hover {
      border-color: ${props => props.theme["red-200"]}
    }
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  textarea {
    all: unset;
    width: 16.5rem;
    height: 9rem;
    padding: 1rem;
    color: ${props => props.theme["gray-700"]};
    background-color: ${props => props.theme["gray-200"]};
    font-size: 1.25rem;
    word-wrap: break-word;
    border-radius: 8px;

    &::placeholder {
      font-size: 1.25rem;
      color: ${props => props.theme["gray-400"]};
    }
  }

  @media(max-width: 320px) {
    font-size: 0.865rem;
    
    textarea {
      width: 13rem;
      height: 8rem;

      &::placeholder {
        font-size: 0.865rem;
      }
    }
  }

  @media(min-width: 768px) {
    font-size: 1rem;
    
    textarea {
      width: 25rem;
      height: 18rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      font-size: 0.875rem;
      
      textarea {
        width: 16.5rem;
        height: 9rem;
      }
    }
  }

  @media(min-width: 1280px) {
    font-size: 1rem;
    
    textarea {
      width: 25rem;
      height: 18rem;
    }
  }
`;

export const ButtonHear = styled.button`
  all: unset;
  width: 16.5rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 2px solid ${props => props.theme["red-300"]};
  background-color: ${props => props.theme["red-200"]};
  transition: all ease 0.3s;
  z-index: 1;

  img {
    width: 24px;
  }

  &:hover {
    scale: 1.1;
  }

  @media(max-width: 320px) {
    width: 12.5rem;
    height: 2rem;

    img {
      width: 18px;
    }
  }

  @media(min-width: 768px) {
    width: 20rem;
    height: 3rem;

    img {
      width: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 16.5rem;
      height: 2.375rem;

      img {
        width: 18px;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 20rem;
    height: 3rem;

    img {
      width: 24px;
    }
  }
`;