import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  `;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2.5rem;
  margin-top: 3rem;
  overflow: hidden;
  
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding-block: 1rem;
    background-color: ${props => props.theme["gray-100"]};
    overflow: hidden;

    p {
      color: ${props => props.theme["gray-700"]};
    }
  }

  @media(max-width: 320px) {
    margin-top: 2rem;
    gap: 2rem;
  }

  @media(min-width: 600px) {
    form { 
      gap: 12px; 
    }

    p {
      font-size: 24px;
    }
  }

  @media(min-width: 1024px) {
    form { 
      gap: 16px; 
    }

    p {
      font-size: 28px;
    }
  } 
`;

export const Input = styled.input`
  all: unset;
  width: 18.75rem;
  padding:0.5rem 1rem;
  border-radius: 6px;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme["gray-700"]};
  font-weight: bold;
  word-wrap: break-word;
  line-height: 1.3;
  overflow: hidden;

  &:focus {
    border-color: ${props => props.theme["gray-500"]};
  }

  @media(max-width: 375px) {
    width: 17rem;
  }

  @media(max-width: 320px) {
    width: 15rem;
  }

  @media(min-width: 600px) {
    padding: 16px; 
    width: 550px;
    font-size: 28px;
  }

  @media(min-width: 1024px) {
    width: 750px;
  }

  @media(min-width: 1440px) {
    width: 800px;
  }
`;

export const ButtonCheck = styled.button`
  all: unset;
  width: 150px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${props => props.theme["green-600"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme["green-700"]};
  border-bottom-width: 3px;
  border-left-width: 3px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (min-width: 1280px) {
    width: 350px;
    height: 52px;

    p {
      font-size: 32px;
    }
  }
`;