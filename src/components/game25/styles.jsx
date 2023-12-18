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
  gap: 3rem;
  margin-top: 3rem;

  p {
    font-size: 1rem;
    padding-inline: 1rem;
    text-align: center;
  }
  
  @media(max-width: 320px) {
    margin-top: 2rem;
    gap: 0.5rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    gap: 2rem;

    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 1rem;
      margin-top: 1rem;

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 3rem;
    margin-top: 3rem;

    p {
      font-size: 1.5rem;
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
  gap: 1rem;

  @media(max-width: 320px) {
    padding-block: 0.5rem;
    gap: 0.5rem;
  }

  @media(min-width:768px) {
    padding-block: 1rem;
    gap: 1rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-block: 0.5rem;
      gap: 0.5rem;
    }
  }

  @media(min-width: 1024px) {
    padding-block: 1rem;
    gap: 1rem;
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