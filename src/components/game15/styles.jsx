import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
  overflow: hidden;

  @media(max-width: 320px) {
    margin-top: 0.5rem;
    gap: 0.5rem;
  }

  @media(min-width: 768px) {
    margin-top: 2rem;
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      margin-top: 0.5rem;
      gap: 0.5rem;
    }
  }

  @media(min-width: 1280px) {
    margin-top: 2rem;
    gap: 2rem;
  }
`;

export const AreaAnswers = styled.div`
  width: 20rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-bottom: 2px solid ${props => props.theme.black};
  padding-bottom: 3px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  p {
    font-size: 1rem;
    font-weight: bold;
  }

  
  @media(max-width: 320px) {
    width: 15rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    width: 32rem;

    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      p {
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1280px) {
    p {
      font-size: 1.5rem;
    }
  }
`;

export const AreaWord = styled.div`
  width: 18.75rem;
  height: 8.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  @media (max-width: 320px) {
    gap: 0.5rem;
    height: 6rem;
  }

  @media (min-width: 768px) {
    width: 36rem;
    height: 12.5rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      gap: 0.5rem;
      height: 6.25rem;
    }
  }

  @media (min-width: 1280px) {
    width: 36rem;
    height: 12.5rem;
  }
`;

export const Words = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;

  @media (max-width: 320px) {
    padding: 0.375rem 0.875rem;
    font-size: 0.875rem
  }

  @media(min-width: 768px) {
    padding: 0.875rem 1.5rem;
    font-size: 1.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding: 0.375rem 0.75rem;
      font-size: 0.875rem;
    }
  }

  @media(min-width: 1280px) {
    padding: 0.875rem 1.5rem;
    font-size: 1.5rem;
  }
`;

export const AreaButton = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media(max-width: 320px) {
    gap: 1rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 1rem;
      margin-top: 0rem;
    }
  }

  @media(min-width: 1280px) {
    gap: 2rem;
    margin-top: 2rem;
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
  font-size: 1rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 320px) {
    width: 9rem;
    font-size: 0.875rem;
  }

  @media (min-width: 768px) {
    width: 15.625rem;
    height: 3rem;
    font-size: 1.5rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 9.375rem;
      height: 2rem;
      font-size: 0.875rem;
    }
  }

  @media (min-width: 1280px) {
    width: 15.625rem;
    height: 3rem;
    font-size: 1.5rem;
  }
`;