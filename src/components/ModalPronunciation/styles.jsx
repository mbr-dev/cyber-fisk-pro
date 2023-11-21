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

  @media(max-width: 360px) {
    width: 20rem;
  }

  @media(max-width: 320px) {
    width: 18rem;
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
    font-size: 1rem;
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
  gap: 8px;
  margin-block: 6px;

  @media(max-width: 320px) {
    gap: 0.5rem;
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
`;

export const ButtonHear = styled.button`
  all: unset;
  width: 264px;
  height: 38px;
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
    width: 200px;
    height: 32px;

    img {
      width: 18px;
    }
  }
`;