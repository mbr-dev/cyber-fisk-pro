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
  gap: 32px;

  p {
    padding-inline: 1rem;
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
    background-color: ${props => props.theme.white};
    color: ${props => props.theme["gray-700"]};
    font-weight: bold;

    @media(max-width: 360px) {
      width: 16rem;
    }
  }

  @media(min-width: 600px) {
    height: 120px;

    input {
      padding: 16px;
      width: 550px;
      font-size: 28px;
    }
  }

  @media(min-width: 1024px) {
    input {
      width: 750px;
    }
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