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

  @media(max-width: 320px) {
    gap: 8px;
  }

  @media(min-width: 768px) {
    gap: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 8px;
    }
  }

  @media(min-width: 1024px) {
    gap: 24px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-block: 12px;
  background-color: ${props => props.theme["gray-100"]};

  label {
    display: block;
    font-size: 16px;
    color: ${props => props.theme["gray-700"]};
  }

  @media(max-width: 320px) {
    padding-block: 10px;
    gap: 6px;

    label {
      font-size: 14px;
    }
  }

  @media(min-width: 768px) {
    padding-block: 16px;
    gap: 12px;

    label {
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-block: 10px;
      gap: 6px;

      label {
        font-size: 14px;
      }
    }
  }

  @media(min-width: 1024px) {
    padding-block: 16px;
    gap: 12px;

    label {
      font-size: 24px;
    }
  }
`;

export const Select = styled.select`
  height: 36px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  box-shadow: 0px 4px 10px 0px #00000033;

  @media(max-width: 320px) {
    height: 32px;
    font-size: 14px;
  }

  @media(min-width: 768px) {
    height: 40px;
    font-size: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 32px;
      font-size: 14px;
    }
  }

  @media(min-width: 1024px) {
    height: 40px;
    font-size: 24px;
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
    height: 44px;

    p {
      font-size: 32px;
    }
  }

  @media (min-width: 1920px) {
    height: 52px;
  }
`;