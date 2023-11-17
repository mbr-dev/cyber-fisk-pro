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

  @media(min-width: 768px) {
    width: 500px;
    height: 700px;
  }

  @media(min-width: 1024px) {
    width: 800px;
    height: 500px;
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
    width: 20px;
  }

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
    top: -0.5rem;
    right: -0.5rem;

    img {
      width: 16px;
    }
  }

  @media(min-width: 768px) {
    width: 64px;
    height: 64px;
    top: -30px;
    right: -30px;

    img {
      width: 32px;
    }
  }
`;

export const CloseEnter = styled(Dialog.Close)`
  all: unset;
  margin-bottom: -1rem;
  width: 200px;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["green-500"]};
  border: 2px solid ${props => props.theme["green-400"]};
  border-radius: 8px;
  border-bottom-width: 4px;

  @media(max-width: 320px) {
    height: 1.75rem;
  }

  @media(min-width: 768px) {
    width: 250px;
    height: 56px;
    font-size:32px;
    position: absolute;
    bottom: -32px;
    margin-bottom: 0;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["green-500"]};
  border: 2px solid ${props => props.theme["green-400"]};
  border-end-end-radius: 8px;
  border-end-start-radius: 8px;

  p {
    font-size: 1.5rem;
    color: ${props => props.theme.white};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props => props.theme["green-400"]};
  }

  @media(max-width: 360px) {
    padding-block: 0.5rem;
  }

  @media(max-width: 320px) {
    font-size: 1rem;
  }

  @media(min-width: 768px) {
    height: 86px;

    p {
      font-size: 32px
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 52px;
  
  p {
    color: ${props => props.theme["gray-700"]};
    font-size: 36px;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    padding-block: 36px;
  }

  @media(min-width: 768px) {
    height: 100%;
    justify-content: center;
    padding-block: 0;

    p {
      font-size: 52px;
    }
  }
`;

export const MainInside = styled.main`
  padding-block: 36px;
  display: flex;
  flex-direction: column;

  @media(max-width: 320px) {
    padding-block: 30px;
  }

  @media(min-width: 768px) {
    padding-block: 64px;
  }

  @media(min-width: 1024px) {
    width: 400px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 16px;
    flex-direction: row;
    padding-block: 36px;
  }
`;