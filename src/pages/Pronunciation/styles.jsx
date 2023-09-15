import styled from "styled-components";

export const PronunciationContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SelectLanguage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0.25rem;
  
  button {
    all: unset;
    cursor: pointer;
    transition: all ease 0.3s;

    img {
      width: 42px;
    }

    &:hover {
      transform: scale(1.15);
    }
  }
`;

export const PronunciationMain = styled.main`
  flex: 1;
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;

  h2 {
    margin-bottom: 0.5rem;
  }
`;

export const Form= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;

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
`;