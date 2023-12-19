import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Phrase = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media(min-width: 1024px) {
    gap: 16px;
  }
`;

export const Letters = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-inline: 2.5rem;

  button {
    all: unset;
    width: 2.375rem;
    height: 3.125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    border: 2px solid transparent;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 4px 10px 0px #00000033;
    transition: all ease 0.3s;

    p {
      color: ${props => props.theme["red-200"]};
    }

    &:hover {
      border-color: ${props => props.theme["gray-700"]};
      transform: scale(1.1);
    }
  }

  .selected {
    border-color: ${props => props.theme["gray-700"]};
  }

  .erro {
    border-color: ${props => props.theme["red-200"]};
  }

  @media(max-width: 320px) {
    padding-inline: 0.25rem;

    button {
      width: 2rem;
      height: 2rem;

      p {
        font-size: 0.75rem;
      }

      span {
        font-size: 0.75rem;
      }
    }
  }

  @media(min-width: 768px) {
    gap: 16px;

    button {
      width: 56px;
      height: 64px;

      p {
        font-size: 1.5rem;
      }

      span {
        font-size: 1.5rem;
      }
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 90%;
      justify-content: center;
      gap: 0.5rem;

      button {
        width: 2rem;
        height: 2.5rem;

        p {
          font-size: 0.75rem;
        }

        span {
          font-size: 0.75rem;
        }
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 16px;

    button {
      width: 56px;
      height: 64px;

      p {
        font-size: 1.5rem;
      }

      span {
        font-size: 1.5rem;
      }
    }
  }
`;

export const LineSeparator = styled.div`
  width: 1.5rem;
  height: 1px;
  background-color: ${props => props.theme["gray-700"]};
`;

export const TypeLetters = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme["gray-300"]};

  .checked {
    border: 2px solid ${props => props.theme["gray-700"]};
  }

  @media(max-width: 320px) {
    padding: 0.25rem;
  }

  @media(min-width: 768px) {
    width: 100%;
    align-items: center;
    padding: 1.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 90%;
      padding: 0.5rem;
    }
  }

  @media(min-width: 1024px) {
    width: 100%;
    padding: 16px;
  }
`;

export const DivWord = styled.div`
  display: flex;
  gap: 0.1875rem;
  margin-right: 1rem;
  margin-bottom: 0.375rem;

  @media(max-width: 320px) {
    margin-right: 2px;
    margin-bottom: 0rem;
  }

  @media(min-width: 768px) {
    gap: 0.5rem;
    margin-right: 1rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.25rem;
      margin-right: 0.5rem;
    }
  }

  @media(min-width: 1024px) {
    gap: 0.5rem;
    margin-right: 1rem;
  }
`;

export const DivLetter = styled.div`
  width: 1.875rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 2px solid ${props => props.theme["gray-200"]};
  background-color: ${props => props.theme.white};

  @media(min-width: 768px) {
    width: 2.5rem;
    height: 3.5rem;
    font-size: 1.5rem;
  }
  
  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 2rem;
      height: 2.5rem;
      font-size: 1rem;
    }
  }

  @media(min-width: 1024px) {
    width: 2.5rem;
    height: 3.5rem;
    font-size: 1.5rem;
  }
`;

export const Answer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 1rem;
    background-color: ${props => props.theme["gray-100"]};
  }

  @media(max-width: 320px) {
    gap: 0.5rem;

    form {
      padding-block: 0.5rem;
    }
  }

  @media(min-width: 768px) {
    gap: 2rem;
    width: 100vw;

    form {
      padding-block: 1
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.25rem;

      form {
        padding-block: 0.5rem;
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 2rem;
    width: 100vw;

    form {
      padding-block: 1
    }
  }
`;

export const TypeLetters2 = styled(TypeLetters)``;

export const DivLetter2 = styled(DivLetter)`
  border: none;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
`;

export const Input = styled.input`
  all: unset;
  width: 18.75rem;
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
    width: 43rem;
    height: 3rem;
    padding-left: 1rem;
    font-size: 1.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 40rem;
      height: 2rem;
      font-size: 0.875rem;
      padding-left: 0.5rem;
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