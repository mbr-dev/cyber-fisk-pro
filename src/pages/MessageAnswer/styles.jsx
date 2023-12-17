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
  gap: 16px;
  padding-top: 16px;

  @media (max-width: 320px) {
    gap: 10px;
    padding-top: 10px;
  }

  @media (min-width: 768px) {
    gap: 32px;
    padding-top: 32px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      gap: 10px;
      padding-top: 10px;
    }
  }

  @media (min-width: 1024px) {
    gap: 24px;
    padding-top: 24px;
  }

  @media (min-width: 1366px) {
    gap: 32px;
    padding-top: 32px;
  }
`;

export const Div = styled.div`
  width: 300px;
  height: 52px;
  display: flex;
  align-items: center;
  padding-inline: 12px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;

  p {
    font-size: 18px;
    font-weight: 700;
  }

  @media(max-width: 320px) {
    width: 250px;
    height: 44px;

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    width: 500px;
    height: 72px;

    p {
      font-size: 28px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 500px;
      height: 36px;

      p {
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 600px;
    height: 72px;

    p {
      font-size: 28px;
    }
  }

  @media(min-width: 1366px) {
    width: 1000px;
    padding-inline: 32px;
  }
`;

export const Text = styled.div`
  flex: 1;
  width: 300px;
  display: flex;
  padding: 14px;
  gap: 12px;
  border-top: 3px solid ${props => props.theme["gray-200"]};
  background-color: ${props => props.theme["gray-100"]};
  
  img {
    width: 18px;
    height: 18px;
  }

  textarea {
    width: 250px;
    font-size: 16px;
    border: none;
    background-color: ${props => props.theme["gray-100"]};
    color: ${props => props.theme["gray-700"]};
    resize: none;
  }

  input {
    display: none;
  }
  
  @media(max-width: 320px) {
    width: 250px;
    padding: 10px;
    gap: 8px;

    textarea {
      width: 200px;
      font-size: 0.875rem;
    }
  }
  
  @media(min-width: 768px) {
    width: 500px;
    padding: 16px;
    gap: 14px;
    
    img {
      width: 24px;
      height: 24px;
    }
    
    textarea {
      width: 420px;
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 500px;
      gap: 8px;
      padding: 10px;

      img {
        width: 16px;
        height: 16px;
      }
      
      textarea {
        width: 28rem;
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 600px;
    padding: 14px;
    gap: 14px;
    
    img {
      width: 22px;
      height: 22px;
    }
    
    textarea {
      width: 520px;
      font-size: 20px;
    }
  }

  @media(min-width: 1366px) {
    width: 1000px;
    padding: 16px;
    gap: 16px;
    
    img {
      width: 28px;
      height: 28px;
    }
    
    textarea {
      width: 920px;
      font-size: 24px;
    }
  }
`;

export const AreaButton = styled.div`
  width: 100vw;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (max-width: 320px) {
    height: 64px;
    gap: 16px;
  }

  @media (min-width: 768px) {
    height: 100px;
    gap: 32px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 52px;
      gap: 32px;
    }
  }

  @media(min-width: 1024px) {
    height: 100px;
    gap: 64px;
  }

  @media (min-width: 1366px) {
    gap: 72px;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 150px;
  height: 38px;
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
    font-size: 20px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 320px) {
    width: 120px;
    height: 32px;

    p {
      font-size: 18px;
    }
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 52px;
    
    p {
      font-size: 32px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 200px;
      height: 32px;
      
      p {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 250px;
    height: 52px;
    
    p {
      font-size: 32px;
    }
  }
`;

