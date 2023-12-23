import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100vw;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(min-width: 768px) {
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.5rem;
    }
  }

  @media(min-width: 1024px) {
    gap: 2rem;
  }
`;

export const Words = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;

  p {
    padding: 6px 8px;
    border-radius: 6px;
    background-color: ${props => props.theme["red-200"]};
    color: ${props => props.theme.white};
    font-size: 16px;
  }

  @media(max-width: 320px) {
    width: 280px;

    p {
      padding: 4px 6px;
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    width: 600px;
    gap: 16px;

    p {
      padding: 10px 16px;
      font-size: 18px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 500px;

      p {
        padding: 4px 6px;
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 600px;
    gap: 16px;

    p {
      padding: 10px 16px;
      font-size: 18px;
    }
  }

  @media(min-width: 1366px) {
    width: 900px;
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
    padding-block: 16px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-block: 8px;
    }
  }

  @media(min-width: 1024px) {
    padding-block: 16px;
  }
`;

export const Input = styled.input`
  width: 350px;
  height: 48px;
  padding-left: 14px;
  border-radius: 6px;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme["gray-700"]};
  font-weight: 500;
  border: none;
  font-size: 16px;

  &::placeholder {
    font-size: 16px;
  }

  &:focus {
    border-color: ${props => props.theme["gray-500"]};
  }

  @media(max-width: 360px) {
    width: 320px;
    font-size: 16px;

    &::placeholder {
      font-size: 16px;
    }
  }

  @media(max-width: 320px) {
    width: 300px;
    height: 40px;
    font-size: 14px;

    &::placeholder {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    width: 700px;
    height: 64px;
    font-size: 24px;

    &::placeholder {
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 600px;
      height: 44px;
      font-size: 14px;

      &::placeholder {
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 900px;
    height: 64px;
    font-size: 24px;
    padding-left: 16px;

    &::placeholder {
      font-size: 24px;
    }
  }

  @media(min-width: 1366px) {
    width: 1200px;
    padding-left: 24px;
  }
`;

export const ButtonCheck = styled.button`
  all: unset;
  width: 200px;
  height: 40px;
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
    font-size: 24px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 320px) {
    width: 200px;
    height: 32px;

    p {
      font-size: 20px;
    }
  }

  @media (min-width: 768px) {
    width: 300px;
    height: 54px;

    p {
      font-size: 32px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 200px;
      height: 32px;

      p {
        font-size: 20px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 300px;
    height: 54px;

    p {
      font-size: 32px;
    }
  }
`;