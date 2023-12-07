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
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;

  @media(max-width: 320px) {
    margin-top: 0.5rem;
    gap: 0.5rem;
  }

  @media(min-width: 768px) {
    margin-top: 1rem;
    gap: 1rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      margin-top: 0.5rem;
      gap: 0.5rem;
    }
  }

  @media(min-width: 1280px) {
    margin-top: 1rem;
    gap: 1rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${props => props.theme["gray-100"]};

  label {
    font-size: 1rem;
    line-height: 1.7;
    color: ${props => props.theme["gray-700"]};
    margin-bottom: 0.5rem;
  }

  @media(max-width: 320px) {
    padding: 0.5rem 1.5rem;

    label {
      font-size: 0.875rem;
    }
  }

  
  @media (min-width: 768px) {
    padding: 1rem 5rem;

    label {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      padding: 0.5rem 4rem;

      label {
        font-size: 0.875rem;
        line-height: 2;
      }
    }
  }

  @media (min-width: 1280px) {
    padding: 1rem 7.5rem;

    label {
      font-size: 1.5rem;
    }
  }
`;

export const Input = styled.input`
  width: 10rem;
  height: 1.5rem;
  border: none;
  border-radius: 6px;
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  box-shadow: 0px 4px 10px 0px #00000033;
  font-size: 0.875rem;
  font-weight: 500;

  @media(max-width: 320px) {
    width: 9rem;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    height: 1.375rem;
    font-size: 0.75rem;
  }

  @media (min-width: 768px) {
    width: 19rem;
    font-size: 1.25rem;
    height: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
      height: 1.375rem;
      font-size: 0.75rem;
    }
  }

  @media (min-width: 1280px) {
    width: 19rem;
    font-size: 1.25rem;
    height: 2rem;
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

  @media (min-width: 1280px) {
    width: 21rem;
    height: 3rem;

    p {
      font-size: 2rem;
    }
  }
`;