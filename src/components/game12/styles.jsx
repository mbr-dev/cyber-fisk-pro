import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Words = styled.div`
  width: 19rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  p {
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${props => props.theme["red-200"]};
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    width: 15rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 1rem;
  background-color: ${props => props.theme["gray-100"]};
`;

export const Input = styled.input`
  all: unset;
  width: 18.75rem;
  padding:0.5rem 1rem;
  border-radius: 6px;
  border: 2px solid transparent;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme["gray-700"]};
  font-weight: bold;
  line-height: 1.3;

  &:focus {
    border-color: ${props => props.theme["gray-500"]};
  }

  @media(max-width: 375px) {
    width: 17rem;
  }

  @media(max-width: 320px) {
    width: 14rem;
    font-size: 0.875rem;
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