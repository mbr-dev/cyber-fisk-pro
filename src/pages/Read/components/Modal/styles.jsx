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
  height: 480px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media(max-width: 320px) {
    width: 18rem;
    height: 380px;
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
  width: 200px;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["yellow-300"]};
  border: 2px solid ${props => props.theme["yellow-200"]};
  border-radius: 8px;
  border-bottom-width: 4px;

  @media(max-width: 320px) {
    height: 1.75rem;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["yellow-300"]};
  border: 2px solid ${props => props.theme["yellow-200"]};
  border-end-end-radius: 8px;
  border-end-start-radius: 8px;

  p {
    font-size: 24px;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    p {
     font-size: 18px;
    }
  }
`;

export const Main = styled.main`
  width: 280px;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media(max-width: 320px) {
    width: 250px;
  }
`;

export const DivRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media(max-width: 320px) {
    gap: 8px;
  }
`;

export const DivInside = styled.div`
  display: flex;
  gap: 24px;

  @media(max-width: 320px) {
    gap: 20px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  p {
    font-weight: 500;
    font-size: 14px;
    padding-left: 16px;
  }

  @media(max-width: 320px) {
    p {
      padding-left: 12px;
    }
  }
`;

export const Input = styled.input`
  all: unset;
  width: 100%;
  height: 36px;
  border-radius: 8px;
  border: 2px solid ${props => props.theme["gray-200"]};

  &::placeholder {
    color: ${props => props.theme["gray-400"]};
  }

  @media(max-width: 320px) {
    height: 32px;
    font-size: 14px;
  }
`;

export const Select = styled.div`
  width: 280px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;

  @media(max-width: 320px) {
    width: 250px;
  }
`;

export const SelectTitle = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px;
  border: 2px solid ${props => props.theme["gray-200"]};
  border-radius: 8px;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme["gray-700"]};

  p {
    font-size: 18px;
    color: ${props => props.theme["gray-400"]};
  }

  img {
    width: 18px;
  }

  @media(max-width: 320px) {
    height: 36px;

    p {
      font-size: 14px;
    }
  }
`;

export const SelectUl = styled.ul`
  width: 280px;
  position: absolute;
  z-index: 100;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-inline: 18px;
  gap: 12px;
  background-color: ${props => props.theme["gray-200"]};
`;

export const SelectLi = styled.li`
  width: 100%;
  list-style: none;
  color: ${props => props.theme["gray-700"]};
  font-weight: 500;

  &:hover {
    background-color: ${props => props.theme["gray-400"]};
  }
`;

export const DivCheck = styled.div`
  display: flex;
  gap: 10px;

  p {
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme["gray-700"]};
  }

  @media (max-width: 320px) {
    p {
      font-size: 12px;
    }
  }
`;