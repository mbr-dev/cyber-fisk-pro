import styled from "styled-components";

export const Container = styled.div`
   flex: 1;
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
  gap: 16px;
  margin-top: 16px;

  @media(max-width: 320px) {
    gap: 8px;
    margin-top: 8px;
  }

  @media(min-width: 768px) {
    gap: 24px;
    margin-top: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 8px;
      margin-top: 8px;
    }
  }

  @media(min-width: 1024px) {
    gap: 24px;
    margin-top: 24px;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 24px 32px;
  background-color: ${props => props.theme["gray-100"]};

  label {
    font-size: 16px;
    line-height: 2;
    color: ${props => props.theme["gray-700"]};
  }

  @media(max-width: 320px) {
    padding: 10px 16px;

    label {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    padding: 24px 64px;

    label {
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      padding: 10px 54px;

      label {
        font-size: 14px;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 24px 64px;

    label {
      font-size: 24px;
    }
  }

  @media (min-width: 1366px) {
    padding: 24px 120px;
    text-align: center;

    label {
      font-size: 28px;
    }
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

  @media(min-width: 768px) {
    font-size: 1.25rem;
    height: 2.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 1.5rem;
    }
  }

  @media(min-width: 1024px) {
    font-size: 1.25rem;
    height: 2rem;
  }
`;

export const ButtonCheck = styled.button`
  all: unset;
  width: 200px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["green-600"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme["green-700"]};
  border-bottom-width: 3px;
  border-left-width: 3px;
  cursor: pointer;

  p {
    font-size: 24px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 320px) {
    width: 200px;
    height: 32px;

    p {
      font-size: 20px;
    }
  }

  @media (min-width: 768px) {
    width: 300px;
    height: 54px;

    p {
      font-size: 32px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 200px;
      height: 32px;

      p {
        font-size: 20px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 300px;
    height: 54px;

    p {
      font-size: 32px;
    }
  }
`;