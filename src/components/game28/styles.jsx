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

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme["gray-100"]};

  label {
    display: block;
    font-size: 1rem;
    color: ${props => props.theme["gray-700"]};
  }

  @media(max-width: 320px) {
    label {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 768px) {
    label {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      label {
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1024px) {
    label {
      font-size: 1.5rem;
    }
  }
`;

export const Select = styled.select`
  width: 15rem;
  height: 2.5rem;
  border: none;
  border-radius: 6px;
  padding-left: 0.5rem;
  box-shadow: 0px 4px 10px 0px #00000033;
  
  option {
    font-weight: 500;
    border: 0;
  }

  @media(max-width: 320px) {
    width: 12rem;
    height: 2rem;
  }

  @media(min-width: 768px) {
    width: 15rem;
    height: 2.5rem;
    font-size: 1.25rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 12rem;
      height: 2rem;
      font-size: 0.875rem;
    }
  }

  @media(min-width: 1024px) {
    width: 15rem;
    height: 2.5rem;
    font-size: 1.25rem;
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