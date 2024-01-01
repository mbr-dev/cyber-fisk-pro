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
    margin-top: 8px;
    gap: 8px;
  }

  @media(min-width: 768px) {
    gap: 24px;
    margin-top: 24px;
  } 

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      margin-top: 8px;
      gap: 8px;
    }
  }

  @media(min-width: 1024px) {
    gap: 24px;
    margin-top: 24px;
  }  
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${props => props.theme["gray-100"]};

  @media(max-width: 320px) {
    padding: 8px;
  }
`;

export const Select = styled.select`
  height: 42px;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 4px 10px 0px #00000033;
  font-size: 16px;

  @media(max-width: 320px) {
    height: 36px;
    font-size: 14px;
  }

  @media(min-width: 768px) {
    height: 52px;
    font-size: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      height: 36px;
      font-size: 14px;
    }
  }

  @media(min-width: 1024px) {
    height: 52px;
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
    height: 54px;

    p {
      font-size: 32px;
    }
  }
`;