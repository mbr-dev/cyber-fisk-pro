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
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
`;

export const SelectLanguage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  
  button {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    border-radius: 6px;
    transition: all ease 0.3s;

    img {
      width: 42px;
    }

    &:hover {
      scale: 1.05;
      border-color: ${props => props.theme["red-200"]}
    }
  }

  @media(max-width: 320px) {
    gap: 1.5rem;
  }
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  textarea {
    all: unset;
    width: 16rem;
    height: 13rem;
    padding: 1rem;
    color: ${props => props.theme["gray-600"]};
    font-size: 1.25rem;
    word-wrap: break-word;
    border: 1px solid ${props => props.theme["gray-400"]};
    border-radius: 8px;

    &::placeholder {
      font-size: 1.25rem;
      color: ${props => props.theme["gray-400"]};
    }
  }

  @media(max-width: 320px) {
    font-size: 0.865rem;
    
    textarea {
      width: 13rem;
      height: 8rem;

      &::placeholder {
        font-size: 0.865rem;
      }
    }
  }
`;