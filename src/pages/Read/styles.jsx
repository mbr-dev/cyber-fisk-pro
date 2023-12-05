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
  background-color: ${props => props.theme["gray-100"]};
  overflow-y: scroll;

  @media (max-width: 320px) {
    gap: 0.75rem;
    padding-top: 0.75rem;
  }

  @media (min-width: 768px) {
    gap: 2.25rem;
    padding-top: 2.25rem;
  }
`;

export const Div = styled.button`
  all: unset;
  width: 18.75rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding-right: 6px;
  box-shadow: 0px 4px 10px 0px #00000033;

  .spanDay {
    height: 100%;
    padding-inline: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;
    border: 2px solid ${props => props.theme["blue-300"]};
    border-top-left-radius: 8px;
    border-end-start-radius: 8px;
    background-color: ${props => props.theme["blue-50"]};
  }

  @media (max-width: 320px) {
    width: 15.625rem;
    height: 2.5rem;

    .spanDay {
      padding-inline: 6px;
      font-size: 0.625rem;
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    width: 37.5rem;
    height: 4rem;
    padding-right: 0.75rem;

    .spanDay {
      padding-inline: 0.75rem;
      font-size: 1rem;
    }
  }
`;

export const AreaButton = styled.div`
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
`;

export const Text = styled.div`
  flex: 1;
  width: 100%;
  padding-left: 0.5rem;

  p {
    font-size: 0.75rem;
  }
  
  span {
    font-size: 0.625rem;
  }

  @media (max-width: 320px) {
    padding-left: 0.375rem;

    p {
      font-size: 0.625rem;
    }
    
    span {
      font-size: 0.5rem;
    }
  }

  @media (min-width: 768px) {
    padding-left: 1rem;

    p {
      font-size: 1.125rem;
    }
    
    span {
      font-size: 0.875rem;
    }
  }
`;

export const DivImg = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme["blue-50"]};
  border-radius: 8px;

  img {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 320px) {
    width: 1.75rem;
    height: 1.75rem;

    img {
      width: 16px;
      height: 16px;
    }
  }

  @media (min-width: 768px) {
    width: 3.25rem;
    height: 3.25rem;
    border-width: 3px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;