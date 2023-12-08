import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  overflow-y: scroll;

  @media (max-width: 320px) {
    gap: 0.75rem;
    padding-top: 0.75rem;
  }

  @media (min-width: 768px) {
    gap: 2.25rem;
    padding-top: 2.25rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      gap: 0.5rem;
      padding-top: 0.5rem;
    }
  }

  @media (min-width: 1280px) {
    gap: 1rem;
    padding-top: 2rem;
  }
`;

export const Div = styled.div`
  width: 18.75rem;
  height: 2.625rem;
  display: flex;
  align-items: center;
  padding-inline: 12px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;

  p {
    font-weight: 700;
    font-size: 1.125rem;
  }

  @media(max-width: 320px) {
    width: 15.625rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    width: 31.25rem;
    height: 3.625rem;

    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 31.25rem;
      height: 2rem;

      p {
        font-size: 0.75rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 31.25rem;
    height: 3.625rem;

    p {
      font-size: 1.5rem;
    }
  }
`;

export const AreaButton = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.125rem;

  @media (max-width: 320px) {
    height: 4rem;
  }

  @media (min-width: 768px) {
    height: 7.5rem;
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 4rem;
    }
  }

  @media (min-width: 1280px) {
    height: 7.5rem;
    gap: 2rem;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 9.375rem;
  height: 2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${props => props.$variant === "red" ? props.theme["red-200"] : props.theme["green-600"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.$variant === "red" ? props.theme["red-300"] :  props.theme["green-700"]};
  border-bottom-width: 3px;
  border-left-width: 3px;
  cursor: pointer;

  p {
      font-size: 1.125rem;
    }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 320px) {
    width: 8.125rem;
    height: 2rem;
  }

  @media (min-width: 768px) {
    width: 15.625rem;
    height: 3.5rem;
    
    p {
      font-size: 1.75rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 12rem;
      height: 2rem;
      
      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1280px) {
    width: 15.625rem;
    height: 3.5rem;
    
    p {
      font-size: 1.75rem;
    }
  }
`;

export const Text = styled.div`
  flex: 1;
  width: 18.75rem;
  display: flex;
  padding: 0.875rem;
  gap: 0.625rem;
  border: 2px solid ${props => props.theme["gray-200"]};
  background-color: ${props => props.theme["gray-100"]};
  
  img {
    width: 18px;
    height: 18px;
  }

  textarea {
    width: 15.625rem;
    border: none;
    background-color: ${props => props.theme["gray-100"]};
    color: ${props => props.theme["gray-700"]};
    resize: none;
  }

  input {
    display: none;
  }

  @media(max-width: 320px) {
    width: 15.625rem;

    textarea {
      width: 200px;
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    width: 31.25rem;

    img {
      width: 24px;
      height: 24px;
    }

    textarea {
      width: 25rem;
      font-size: 1.25rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 31.25rem;
      gap: 0.5rem;

      img {
        width: 16px;
        height: 16px;
      }

      textarea {
        width: 28rem;
        font-size: 0.75rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 31.25rem;

    img {
      width: 24px;
      height: 24px;
    }

    textarea {
      width: 25rem;
      font-size: 1.25rem;
    }
  }
`;