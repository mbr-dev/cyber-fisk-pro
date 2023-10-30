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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding-block: 1rem;
    background-color: ${props => props.theme["gray-100"]};

    p {
      color: ${props => props.theme["gray-700"]};
    }
  }

  @media(max-width: 320px) {
    margin-top: 2rem;
    gap: 2rem;
  }
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