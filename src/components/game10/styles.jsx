import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
  
  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 1rem;
    background-color: ${props => props.theme["gray-100"]};
  }

  @media(max-width: 320px) {
    margin-top: 2rem;
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

export const Button = styled.button`
  all: unset;
  width: 15.875rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["green-100"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme["green-200"]};
  border-bottom: 4px solid ${props => props.theme["green-200"]};
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media(max-width: 320px) {
    width: 11rem;
    height: 2rem;

    p {
      font-size: 1rem;
    }
  }
`;