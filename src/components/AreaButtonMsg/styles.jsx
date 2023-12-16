import styled from "styled-components";

export const Container = styled.div`
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
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.$variant === "red" ? props.theme["red-200"] : props.theme["yellow-300"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.$variant === "red" ? props.theme["red-300"] :  props.theme["yellow-200"]};
  border-bottom-width: 3px;
  border-left-width: 3px;
  cursor: pointer;

  p {
      font-size: 18px;
    }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 320px) {
    width: 120px;
    height: 36px;

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 54px;
    
    p {
      font-size: 28px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 180px;
      height: 28px;
      
      p {
        font-size: 14px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 250px;
    height: 54px;
    
    p {
      font-size: 28px;
    }
  }

  @media (min-width: 1366px) {
    width: 400px;
    height: 64px;
    
    p {
      font-size: 36px;
    }
  }
`;