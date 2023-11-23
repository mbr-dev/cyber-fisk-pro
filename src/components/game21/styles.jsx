import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media(max-width: 320px) {
    margin-top: 0.5rem;
    gap: 0.75rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 1rem 1.875rem;
  background-color: ${props => props.theme["gray-100"]};

  label {
    font-size: 1.25rem;
    line-height: 1.7;
    color: ${props => props.theme["gray-700"]};
  }

  @media(max-width: 360px) {
    label {
      line-height: 1.6;
      padding-inline: 1.5rem;
    }
  }

  @media(max-width: 320px) {
    margin-top: 0.5rem;
    gap: 1rem;

    label {
      font-size: 1rem;
    }
  }

  @media (min-width: 600px) {
    padding: 18px 92px;

    label {
      font-size: 28px;
    }
  }

  @media (min-width: 1024px) {
    padding: 18px 120px;

    label {
      font-size: 32px;
    }
  }

  @media (min-width: 1920px) {
    padding: 20px 500px;
  }
`;

export const Select = styled.select`
  border: none;
  border-radius: 6px;
  height: 1.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  box-shadow: 0px 4px 10px 0px #00000033;

  option {
    font-weight: 500;
    border: 0;
  }

  @media(max-width: 320px) {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    height: 1.375rem;
  }

  @media(min-width: 600px) {
    height: 32px;
  }

  @media(min-width: 1280px) {
    font-size: 32px;
    height: 36px;
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