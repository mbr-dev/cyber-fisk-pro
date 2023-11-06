import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;

  @media(max-width: 320px) {
    padding-top: 0rem;
  }
`;

export const Phrase = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Letters = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
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

  @media(max-width: 360px) {
    padding-inline: 1.5rem;

    button {
      width: 2rem;
      height: 3rem;
    }
  }

  @media(max-width: 320px) {
    padding-inline: 0.5rem;

    button {
      width: 2rem;
      height: 2.75rem;
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
`;

export const DivWord = styled.div`
  display: flex;
  gap: 0.1875rem;
  margin-right: 1rem;
  margin-bottom: 0.375rem;
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
`;

export const ButtonClean = styled.div`
  all: unset;
  width: 15.875rem;
  height: 2.5rem;
  display: flex;
  margin-top: 0.5rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
  border: 3px solid ${props => props.theme["red-300"]};
  border-bottom: 4px solid ${props => props.theme["red-300"]};
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  p {
    font-size: 1.25rem;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 320px) {
    width: 11rem;
    height: 2rem;
    margin-top: 0;

    p {
      font-size: 1rem;
    }
  }
`;

export const TypeLetters2 = styled(TypeLetters)`
  background-color: transparent;
  padding: 0.5rem 1.5rem;
`;

export const DivLetter2 = styled(DivLetter)`
  border-color: transparent;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
`;

export const Answer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 1rem;
    background-color: ${props => props.theme["gray-100"]};
  }

  @media(max-width: 320px) {
    margin-top: 1rem;
    gap: 2rem;
  }
`;

export const Input = styled.textarea`
  all: unset;
  width: 18.75rem;
  padding:0.5rem 1rem;
  border-radius: 6px;
  border: 2px solid transparent;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme["gray-700"]};
  font-weight: bold;
  word-wrap: break-word;
  line-height: 1.3;

  &:focus {
    border-color: ${props => props.theme["gray-500"]};
  }

  @media(max-width: 375px) {
    width: 17rem;
  }

  @media(max-width: 320px) {
    width: 15rem;
  }
`;