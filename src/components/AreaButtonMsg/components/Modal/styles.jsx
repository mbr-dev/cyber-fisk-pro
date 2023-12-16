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
  width: 300px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  position: fixed;
  top: 50%;
  left: 50%;
  padding-bottom: 16px;
  transform: translate(-50%, -50%);

  @media(max-width: 320px) {
    width: 250px;
    padding-bottom: 10px;
  }

  @media(min-width: 768px) {
    width: 500px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 400px;
      padding-bottom: 10px;
    }
  }

  @media(min-width: 1024px) {
    width: 600px;
    padding-bottom: 16px;
  }
`;

export const Close = styled(Dialog.Close)`
  all: unset;
  position: absolute;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -0.75rem;
  right: -0.75rem;
  background-color: ${props => props.theme["red-200"]};
  border-radius: 9999px;

  img {
    width: 16px;
  }

  @media(max-width: 320px) {
    width: 28px;
    height: 28px;
    top: -12px;
    right: -12px;

    img {
      width: 14px;
    }
  }

  @media(min-width: 768px) {
    width: 52px;
    height: 52px;
    top: -26px;
    right: -26px;

    img {
      width: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 28px;
    height: 28px;
    top: -12px;
    right: -12px;

    img {
      width: 14px;
    }
    }
  }

  @media(min-width: 1024px) {
    width: 52px;
    height: 52px;
    top: -26px;
    right: -26px;

    img {
      width: 24px;
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  padding-block: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["yellow-300"]};
  border: 2px solid ${props => props.theme["yellow-200"]};
  border-end-end-radius: 8px;
  border-end-start-radius: 8px;

  p {
    font-size: 20px;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    padding-block: 6px;

    p {
     font-size: 16px;
    }
  }

  @media(min-width: 768px) {
    padding-block: 10px;

    p {
      font-size: 28px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-block: 6px;

      p {
      font-size: 16px;
      }
    }
  }

  @media(min-width: 1024px) {
    padding-block: 10px;

    p {
      font-size: 28px;
    }
  }

  @media(min-width: 1366px) {
    border-end-end-radius: 16px;
    border-end-start-radius: 16px;
    p {
      font-size: 32px;
    }
  }
`;

export const Main = styled.main`
  width: 250px;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  
  @media(max-width: 320px) {
    width: 200px;
    margin-top: 8px;
    gap: 6px;
  }

  @media(min-width: 768px) {
    width: 400px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 350px;
      margin-top: 8px;
      gap: 8px;
    }
  }

  @media(min-width: 1024px) {
    width: 520px;
    margin-top: 16px;
    gap: 16px;
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media(max-width: 320px) {
    gap: 6px
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
    }
  }

  @media(min-width: 1024px) {
    justify-content: flex-start;
    align-items: center;
  }
`;

export const DivInside = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: column;
      gap: 6px;
    }
  }
  
  @media(min-width: 1024px) {
    gap: 16px;
  }
`;

export const Div = styled.div`
  width: 108px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;

  p {
    font-weight: 500;
    font-size: 0.875rem;
    padding-left: 10px;
  }

  .inputDate {
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 2px solid ${props => props.theme["gray-200"]};
    font-size: 12px;
    padding-inline: 4px;
    color: ${props => props.theme["gray-400"]};
  }

  @media(max-width: 320px) {
    width: 86px;

    p {
      padding-left: 6px;
      font-size: 12px;
    }

    .inputDate {
      height: 36px;
      padding-inline: 0px;
      font-size: 10px;
    }
  }

  @media(min-width: 768px) {
    width: 180px;

    p {
      font-size: 20px;
      padding-left: 1rem;
    }

    .inputDate {
      height: 52px;
      font-size: 18px;
      padding-inline: 8px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 100px;

      p {
        padding-left: 6px;
        font-size: 12px;
      }

      .inputDate {
        height: 32px;
        font-size: 10px;
        padding-inline: 4px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 180px;

    p {
      font-size: 20px;
      padding-left: 1rem;
    }

    .inputDate {
      height: 52px;
      font-size: 18px;
      padding-inline: 8px;
    }
  }
`;

export const DivFull = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 4px;

  p {
    font-weight: 500;
    font-size: 0.875rem;
    padding-left: 10px;
  }

  @media(max-width: 320px) {
    p {
      padding-left: 6px;
      font-size: 12px;
    }
  }

  @media(min-width: 768px) {
    p {
      font-size: 20px;
      padding-left: 1rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      p {
        padding-left: 6px;
        font-size: 12px;
      }
    }
  }

  @media(min-width: 1024px) {
    p {
      font-size: 20px;
      padding-left: 1rem;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 2px solid ${props => props.theme["gray-200"]};
  font-size: 14px;
  padding-left: 10px;
  
  &::placeholder {
    color: ${props => props.theme["gray-100"]};
  }

  @media(max-width: 320px) {
    height: 36px;
    font-size: 12px;
  }

  @media(min-width: 768px) {
    height: 52px;
    font-size: 20px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 32px;
      font-size: 14px;
    }
  }

  @media(min-width: 1024px) {
    width: 100%;
    height: 52px;
    font-size: 1.25rem;
  }
`;

export const DivInside2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media(max-width: 320px) {
    gap: 6px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 700px;
      gap: 6px;
    }
  }

  @media(min-width: 1024px) {
    width: 700px;
    gap: 16px;
  }
`;

export const DivCheckRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media(max-width: 320px) {
    gap: 6px;
  }

  @media(min-width: 768px) {
    gap: 12px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 6px;
    }
  }

  @media(min-width: 1024px) {
    gap: 12px;
  }
`;

export const Select = styled.div`
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;
`;

export const SelectTitle = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-inline: 6px;
  border: 2px solid ${props => props.theme["gray-200"]};
  border-radius: 8px;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme["gray-700"]};

  p {
    font-size: 16px;
    color: ${props => props.theme["gray-400"]};
  }

  img {
    width: 16px;
  }

  @media(max-width: 320px) {
    height: 36px;

    p {
      font-size: 14px;
    }

    img {
      width: 14px;
    }
  }

  @media(min-width: 768px) {
    height: 52px;
    padding-inline: 10px;

    p {
      font-size: 22px;
    }

    img {
      width: 20px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 36px;
      padding-inline: 6px;

      p {
        font-size: 12px;
      }

      img {
        width: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    height: 52px;
    padding-inline: 10px;

    p {
      font-size: 22px;
    }

    img {
      width: 20px;
    }
  }
`;

export const SelectUl = styled.ul`
  width: 250px;
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 8px 16px;
  gap: 12px;
  background-color: ${props => props.theme["gray-200"]};

  @media(max-width: 320px) {
    width: 200px;
    padding: 6px 14px;
  }

  @media(min-width: 768px) {
    width: 400px;
    padding: 10px 18px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 224px;
      padding: 6px 12px;
    }
  }

  @media(min-width: 1024px) {
    width: 290px;
    padding: 10px 18px;
  }
`;

export const SelectLi = styled.li`
  list-style: none;
  color: ${props => props.theme["gray-700"]};
  font-weight: 500;
  font-size: 16px;

  &:hover {
    background-color: ${props => props.theme["gray-400"]};
  }

  @media(min-width: 768px) {
    font-size: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      font-size: 14px;
    }
  }

  @media(min-width: 1024px) {
    font-size: 24px;
  }
`;

export const DivCheck = styled.label`
  width: 100%;
  display: flex;
  gap: 0.625rem;

  p {
    font-size: 12px;
    font-weight: 500;
    color: ${props => props.theme["gray-700"]};
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 320px) {
    gap: 8px;

    p {
      font-size: 10px;
    }

    input[type="checkbox"] {
      width: 14px;
      height: 14px;
    }
  }

  @media (min-width: 768px) {
    gap: 0.5rem;

    p {
      font-size: 20px;
    }

    input[type="checkbox"] {
      width: 24px;
      height: 24px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      p {
        font-size: 12px;
      }

      input[type="checkbox"] {
        width: 1rem;
        height: 1rem;
      }
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 18px;
    }

    input[type="checkbox"] {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Enter = styled.button`
  all: unset;
  width: 180px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["yellow-300"]};
  border: 2px solid ${props => props.theme["yellow-200"]};
  border-radius: 8px;
  border-bottom-width: 4px;
  font-size: 16px;

  @media(max-width: 320px) {
    width: 150px;
    height: 28px;
    font-size: 14px;
  }

  @media(min-width: 768px) {
    width: 250px;
    height: 48px;
    font-size: 28px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 150px;
      height: 28px;
      font-size: 14px;
    }
  }

  @media(min-width: 1024px) {
    width: 250px;
    height: 48px;
    font-size: 28px;
  }
`;