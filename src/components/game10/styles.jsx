import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["gray-100"]};
  padding-block: 1rem;
  gap: 1.5rem;
  margin-top: 4rem;

  @media(max-width: 320px) {
    margin-top: 1rem;
    gap: 1rem;
  }
`;

export const Input = styled.input`
  all: unset;
  width: 18.75rem;
  height: 2rem;
  padding-left: 1rem;
  border-radius: 6px;
  border: 2px solid transparent;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme["gray-700"]};
  font-weight: bold;

  &:focus {
    border-color: ${props => props.theme["gray-500"]};
  }

  &::placeholder {
    color: ${props => props.theme.black};
  }
`;