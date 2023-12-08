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
  height: 27rem;
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
    height: 23,75rem;
  }

  @media(min-width: 768px) {
    width: 28rem;
    height: 35rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 31rem;
      height: 17.5rem;
    }
  }

  @media(min-width: 1280px) {
    width: 38rem;
    height: 29rem;
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
      top: -1rem;
      right: -1rem;

      img {
        width: 16px;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 3rem;
    height: 3rem;
    top: -1.25rem;
    right: -1.25rem;

    img {
      width: 24px;
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 3.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["yellow-300"]};
  border: 2px solid ${props => props.theme["yellow-200"]};
  border-end-end-radius: 8px;
  border-end-start-radius: 8px;

  p {
    font-size: 1.5rem;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    p {
     font-size: 1.125rem;
    }
  }

  @media(min-width: 768px) {
    height: 4.5rem;

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 3.5rem;
      p {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 1280px) {
    height: 4rem;

    p {
      font-size:1.5rem;
    }
  }
`;

export const Main = styled.main`
  width: 17.5rem;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;

  @media(max-width: 320px) {
    width: 15.625rem;
  }

  @media(min-width: 768px) {
    width: 25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 28rem;
      gap: 0.5rem;
    }
  }

  @media(min-width: 1280px) {
    width: 34rem;
    gap: 1rem;
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 28rem;
      flex-direction: row;
    }
  }

  @media(min-width: 1280px) {
    width: 34rem;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const DivCheckRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media(min-width: 1280px) {
    gap: 1rem;
  }
`;

export const DivInside = styled.div`
  display: flex;
  gap: 1rem;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
  
  @media(min-width: 1280px) {
    gap: 1rem;
  }
`;

export const DivInside2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.5rem;
    }
  }

  @media(min-width: 1280px) {
    gap: 1rem;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  text-align: left;

  .inputDate {
    all: unset;
    width: 7.5rem;
    height: 2.25rem;
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 2px solid ${props => props.theme["gray-200"]};
    font-size: 0.875rem;
    padding-left: 0.5rem;
    color: ${props => props.theme["gray-400"]};
  }

  p {
    font-weight: 500;
    font-size: 0.875rem;
    padding-left: 1rem;
  }

  @media(max-width: 320px) {
    p {
      padding-left: 0.75rem;
    }
  }

  @media(min-width: 768px) {
    p {
      font-size: 1.5rem;
      padding-left: 1rem;
    }

    .inputDate {
      width: 9.5rem;
      height: 3rem;
      font-size: 1.125rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      .inputDate {
        width: 7.5rem;
        height: 2rem;
        font-size: 0.75rem;
      }

      p {
        font-size: 0.875rem;
        padding-left: 0.75rem;
      }
    }
  }

  @media(min-width: 1280px) {
    p {
      font-size: 1.5rem;
      padding-left: 1rem;
    }

    .inputDate {
      width: 9.5rem;
      height: 3rem;
      font-size: 1.25rem;
    }
  }
`;

export const Input = styled.input`
  all: unset;
  width: 17.5rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 2px solid ${props => props.theme["gray-200"]};
  font-size: 0.875rem;
  
  &::placeholder {
    color: ${props => props.theme["gray-100"]};
  }

  @media(max-width: 320px) {
    height: 2rem;
    font-size: 0.875rem;
  }

  @media(min-width: 768px) {
    width: 23rem;
    height: 3rem;
    font-size: 1.25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 18.75rem;
      height: 2rem;
      font-size: 0.875rem;
    }
  }

  @media(min-width: 1280px) {
    width: 22rem;
    height: 3rem;
    font-size: 1.25rem;
  }
`;

export const Select = styled.div`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;
`;

export const SelectTitle = styled.div`
  width: 17.5rem;
  height: 2.625rem;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-inline: 0.5rem;
  border: 2px solid ${props => props.theme["gray-200"]};
  border-radius: 8px;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme["gray-700"]};

  p {
    font-size: 1.125rem;
    color: ${props => props.theme["gray-400"]};
  }

  img {
    width: 18px;
  }

  @media(max-width: 320px) {
    height: 2.25rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    width: 23rem;
    height: 3rem;

    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 19rem;
      height: 2.25rem;

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 22rem;
    height: 3rem;

    p {
      font-size: 1.5rem;
    }
  }
`;

export const SelectUl = styled.ul`
  width: 17.5rem;
  position: absolute;
  z-index: 100;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-inline: 1.125rem;
  gap: 0.75rem;
  background-color: ${props => props.theme["gray-200"]};

  @media(min-width: 768px) {
    width: 23rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 19rem;
    }
  }

  @media(min-width: 1280px) {
    width: 22rem;
  }
`;

export const SelectLi = styled.li`
  list-style: none;
  color: ${props => props.theme["gray-700"]};
  font-weight: 500;
  font-size: 1rem;
  text-align: left;

  &:hover {
    background-color: ${props => props.theme["gray-400"]};
  }

  @media(min-width: 768px ) {
    font-size: 1.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      font-size: 1rem;
    }
  }
`;

export const DivCheck = styled.div`
  width: 100%;
  display: flex;
  gap: 0.625rem;

  p {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${props => props.theme["gray-700"]};
  }

  input[type="checkbox"] {
    width: 1.125rem;
    height: 1.125rem;
  }

  @media (max-width: 320px) {
    p {
      font-size: 0.75rem;
    }
  }

  @media (min-width: 768px) {
    gap: 0.5rem;

    p {
      font-size: 1.25rem;
    }

    input[type="checkbox"] {
      width: 1.625rem;
      height: 1.625rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      gap: 0.5rem;

      p {
        font-size: 0.875rem;
      }

      input[type="checkbox"] {
        width: 1rem;
        height: 1rem;
      }
    }
  }

  @media (min-width: 1280px) {
    gap: 0.5rem;

    p {
      font-size: 1.125rem;
    }

    input[type="checkbox"] {
      width: 1.625rem;
      height: 1.625rem;
    }
  }
`;

export const Enter = styled.button`
  all: unset;
  width: 12.5rem;
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

  @media(max-width: 320px) {
    height: 1.75rem;
  }

  @media(min-width: 768px) {
    height: 3rem;
    width: 18.75rem;
    font-size: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 15.625rem;
      height: 2rem;
      font-size: 1rem;
      margin-bottom: -1rem;
    }
  }

  @media(min-width: 1280px) {
    height: 3rem;
    width: 18.75rem;
    font-size: 2rem;
    margin-bottom: 0rem;
  }
`;