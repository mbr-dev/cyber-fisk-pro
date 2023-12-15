import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

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
      gap: 2rem;
    }
  }

  @media(min-width: 1024px) {
    height: 100px;
    gap: 64px;
  }

  @media (min-width: 1366px) {
    height: 7.5rem;
    gap: 150px;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 9.375rem;
  height: 2.25rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${props => props.$variant === "red" ? props.theme["red-200"] : props.theme["yellow-300"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.$variant === "red" ? props.theme["red-300"] :  props.theme["yellow-200"]};
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
      width: 15rem;
      height: 2.25rem;
      
      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 300px;
    height: 64px;
    
    p {
      font-size: 32px;
    }
  }

  @media (min-width: 1366px) {
    width: 400px;
    height: 72px;
    
    p {
      font-size: 36px;
    }
  }
`;