import styled from "styled-components";

export const Container = styled.div`
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
  gap: 4rem;

  @media(max-width: 320px) {
    gap: 3rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["gray-100"]};

  input {
    all: unset;
    width: 18.75rem;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    border: 2px solid transparent;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme["gray-700"]};
    font-weight: bold;

    @media(max-width: 360px) {
      width: 16rem;
    }
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