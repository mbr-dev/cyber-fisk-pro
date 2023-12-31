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

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
    top: -0.5rem;
    right: -0.5rem;
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
`;

export const Main = styled.main`
  width: 100%;
  margin-top: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-inline: 1.125rem;
  padding-bottom: 2rem;
  
  p {
    font-weight: 500;
  }

  @media(max-width: 360px) {
    gap: 0.5rem;
    padding-inline: 1rem;
    padding-bottom:1.5rem;
  }

  @media(max-width: 320px) {
    padding-inline: 0.5rem;
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;

    p {
      font-size: 0.875rem;
    }
  }
`;

export const Text = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media(max-width: 360px) {
    gap: 0.5rem;
  }
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }
`;

export const Line = styled.div`
  width: 13rem;
  height: 2px;
  background-color: ${props=> props.theme["blue-400"]};
`;

export const Row = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media(max-width: 320px) {
    gap: 0.365rem;
  }
`;

export const Letter = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media(max-width: 320px) {
    gap: 0.365rem;
  }
`;

export const Letters = styled.div`
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme["gray-600"]};
  border: 2px solid ${props =>props.theme["gray-700"]};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${props => props.theme["gray-700"]};

  @media(max-width: 320px) {
    width: 2rem;
    height: 2rem;
    font-size: 1.25rem;
  }
`;