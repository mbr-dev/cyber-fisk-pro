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

  p {
    padding-inline: 1rem;
  }

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