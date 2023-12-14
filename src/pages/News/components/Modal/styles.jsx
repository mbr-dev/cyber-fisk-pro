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

  @media(max-width: 320px) {
    width: 18rem;
    height: 15.625rem;
  }

  @media(min-width: 768px) {
    width: 28rem;
    height: 25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 20rem;
      height: 17.5rem;
    }
  }

  @media(min-width: 1280px) {
    width: 28rem;
    height: 25rem;
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
  top: -0.9375rem;
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
      right: -1rem;

      img {
        width: 16px;
      }
    }
  }

  @media (min-width: 1280px) {
    width: 3rem;
    height: 3rem;
    top: -1.5rem;
    right: -1.5rem;
    
    img {
      width: 28px;
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

  @media(min-width: 768px) {
    height: 3rem;
    width: 18.75rem;
    font-size: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 12.5rem;
      height: 2rem;
      font-size: 1.5rem;
    }
  }

  @media(min-width: 1280px) {
    height: 3rem;
    width: 18.75rem;
    font-size: 2rem;
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
      height: 3rem;

      p {
        font-size: 1.5rem;
      }
    }
  }

  @media(min-width: 1280px) {
    height: 4.5rem;

    p {
      font-size: 2rem;
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
  justify-content: space-around;
  padding-block: 1rem;
  gap: 1rem;

  @media(max-width: 320px) {
    width: 15.625rem;
  }

  @media(min-width: 768px) {
    width: 23rem;
    padding-block: 1.5rem;
  }

  @media (orientation: landscape) {
    @media(min-width: 600px) {
      width: 17.5rem;
      padding-block: 0.5rem;
    }
  }

  @media(min-width: 1280px) {
    width: 22.5rem;
    padding-block: 1.5rem;
  }
`;

export const DivRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(min-width: 768px) {
    gap: 1.5rem;
  }
`;

export const DivInside = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;

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
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      p {
        font-size: 1rem;
        padding-left: 0.5rem;
      }
    }
  }

  @media(min-width: 1280px) {
    p {
      font-size: 1.5rem;
      padding-left: 1rem;
    }
  }
`;

export const Input = styled.input`
  all: unset;
  width: 8.25rem;
  height: 2.25rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme["gray-200"]};
  color: ${props => props.theme["gray-400"]};

  &::placeholder {
    color: ${props => props.theme["gray-400"]};
  }

  @media(max-width: 320px) {
    height: 2rem;
    font-size: 0.875rem;
  }

  @media(min-width: 768px) {
    width: 10.25rem;
    height: 3rem;
    font-size: 1.25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 7.75rem;
      height: 2.25rem;
      font-size: 0.875rem;
    }
  }

  @media(min-width: 1280px) {
    width: 10.5rem;
    height: 3rem;
    font-size: 1.125rem;
  }
`;

export const DivCheck = styled.div`
  display: flex;
  gap: 0.625rem;

  p {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${props => props.theme["gray-700"]};
  }

  @media (max-width: 320px) {
    p {
      font-size: 0.75rem;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.5rem;
    }

    input[type="checkbox"] {
      width: 1.75rem;
      height: 1.75rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.5rem;

      p {
        font-size: 1rem;
      }

      input[type="checkbox"] {
        width: 1rem;
        height: 1rem;
      }
    }
  }

  @media (min-width: 1280px) {
    p {
      font-size: 1.5rem;
    }

    input[type="checkbox"] {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
`;