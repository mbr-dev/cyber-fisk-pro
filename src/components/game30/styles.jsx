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
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  @media(max-width: 360px) {
    margin-top: 1rem;
  }  
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: ${props => props.theme["gray-100"]};

  @media(max-width: 320px) {
    margin-top: 0.5rem;

    label {
      font-size: 1rem;
    }
  }
`;

export const Select = styled.select`
  width: 20rem;
  height: 2.5rem;
  border: none;
  border-radius: 6px;
  padding-left: 0.5rem;
  box-shadow: 0px 4px 10px 0px #00000033;
  
  option {
    font-weight: 500;
    border: 0;
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