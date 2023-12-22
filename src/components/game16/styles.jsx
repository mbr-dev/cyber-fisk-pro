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
  gap: 16px;

  p {
    font-size: 16px;
  }

  @media(min-width: 320px) {
    gap: 10px;

    p {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    gap: 32px;

    p {
      font-size: 20px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 10px;

      p {
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 32px;

    p {
      font-size: 20px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 16px;
  background-color: ${props => props.theme["gray-100"]};

  @media(max-width: 320px) {
    padding-block: 8px;
  }

  @media(min-width: 768px) {
    padding-block: 18px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-block: 8px;
    }
  }

  @media(min-width: 1024px) {
    padding-block: 18px;
  }
`;

export const Input = styled.input`
  width: 350px;
  height: 40px;
  padding-left: 10px;
  border-radius: 6px;
  border: none;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme["gray-700"]};
  font-weight: 500;
  font-size: 16px;
  
  &:focus {
    font-size: 16px;
    border-color: ${props => props.theme["gray-500"]};
  }

  @media(max-width: 360px) {
    width: 320px;
  }

  @media(max-width: 320px) {
    width: 300px;
    height: 36px;
    font-size: 14px;

    &:focus {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    width: 700px;
    height: 64px;
    padding-left: 16px;
    font-size: 24px;

    &:focus {
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 600px;
      height: 36px;
      font-size: 14px;

      &:focus {
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 900px;
    height: 64px;
    padding-left: 16px;
    font-size: 24px;

    &:focus {
      font-size: 24px;
    }
  }

  @media(min-width: 1366px) {
    width: 1200px;
  }
`;

export const ButtonCheck = styled.button`
  all: unset;
  width: 10rem;
  height: 2.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["green-600"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme["green-700"]};
  border-bottom-width: 3px;
  border-left-width: 3px;
  cursor: pointer;

  p {
    font-size: 1rem;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 320px) {
    width: 9rem;
    height: 2rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media (min-width: 768px) {
    width: 21rem;
    height: 3rem;

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 13rem;
      height: 2rem;

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 21rem;
    height: 3rem;

    p {
      font-size: 2rem;
    }
  }
`;