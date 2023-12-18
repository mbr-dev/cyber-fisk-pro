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
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  p {
    padding: 0.375rem 0.5rem;
    border-radius: 6px;
    background-color: ${props => props.theme["red-200"]};
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    width: 18.75rem;
  }

  @media(min-width: 768px) {
    gap: 1rem;
    width: 40rem;

    p {
      padding: 0.75rem 1.125rem;
      font-size: 1.125rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 30rem;

      p {
        padding: 0.375rem 0.875rem;
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 1rem;
    width: 40rem;

    p {
      padding: 0.75rem 1.125rem;
      font-size: 1.125rem;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 1rem;
  background-color: ${props => props.theme["gray-100"]};

  @media(max-width: 320px) {
    padding-block: 0.5rem;
  }

  @media(min-width: 768px) {
    padding-block: 1rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-block: 0.5rem;
    }
  }

  @media(min-width: 1024px) {
    padding-block: 1rem;
  }
`;

export const Input = styled.input`
  all: unset;
  width: 21rem;
  height: 2.5rem;
  padding-left: 0.5rem;
  border-radius: 6px;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme["gray-700"]};
  font-weight: 500;
  font-size: 1rem;

  &:focus {
    border-color: ${props => props.theme["gray-500"]};
  }

  @media(max-width: 320px) {
    width: 17rem;
    height: 2rem;
    font-size: 0.875rem;
  }

  @media(min-width: 768px) {
    width: 42rem;
    height: 3rem;
    padding-left: 1rem;
    font-size: 1.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 40rem;
      height: 2rem;
      font-size: 0.875rem;
    }
  }

  @media(min-width: 1024px) {
    width: 900px;
    height: 3rem;
    padding-left: 1rem;
    font-size: 1.5rem;
  }

  @media(min-width: 1366px) {
    width: 68rem;
    height: 3rem;
    padding-left: 1rem;
    font-size: 1.5rem;
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