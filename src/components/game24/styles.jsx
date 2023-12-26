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
  margin-top: 16px;
  gap: 16px;

  @media(max-width: 320px) {
    margin-top: 8px;
    gap: 8px;
  }

  @media(min-width: 768px) {
    margin-top: 24px;
    gap: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      margin-top: 8px;
      gap: 8px;
    }
  }

  @media(min-width: 1024px) {
    margin-top: 24px;
    gap: 24px;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 16px 32px;
  background-color: ${props => props.theme["gray-100"]};

  label {
    font-size: 16px;
    line-height: 2;
    color: ${props => props.theme["gray-700"]};
  }

  @media(max-width: 320px) {
    padding: 8px 24px;

    label {
      font-size: 14px;
    }
  }

  
  @media (min-width: 768px) {
    padding: 16px 54px;

    label {
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      padding: 8px 64px;

      label {
        font-size: 14px;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 16px 54px;

    label {
      font-size: 24px;
    }
  }

  @media (min-width: 1366px) {
    padding: 16px 120px;
  }
`;

export const Input = styled.input`
  width: ${props => props.$variant === "little" ? "80px" : props.$variant === "medium" ? "124px" : "168px"};
  height: 36px;
  border: none;
  border-radius: 6px;
  padding-left: 8px;
  margin-inline: 8px;
  margin-bottom: 6px;
  box-shadow: 0px 4px 10px 0px #00000033;
  font-size: 16px;
  font-weight: 500;

  @media(max-width: 320px) {
    width: ${props => props.$variant === "little" ? "72px" : props.$variant === "medium" ? "110px" : "150px"};
    margin-inline: 4px;
    height: 18px;
    font-size: 14px;
    margin-bottom: 4px;
  }

  @media (min-width: 768px) {
    width: ${props => props.$variant === "little" ? "116px" : props.$variant === "medium" ? "184px" : "248px"};
    margin-inline: 10px;
    height: 40px;
    font-size: 24px;
    margin-bottom: 8px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: ${props => props.$variant === "little" ? "72px" : props.$variant === "medium" ? "110px" : "150px"};
      margin-inline: 4px;
      height: 18px;
      font-size: 14px;
      margin-bottom: 4px;
    }
  }

  @media (min-width: 1024px) {
    width: ${props => props.$variant === "little" ? "116px" : props.$variant === "medium" ? "184px" : "248px"};
    margin-inline: 10px;
    height: 40px;
    font-size: 24px;
    margin-bottom: 8px;
  }

  @media (min-width: 1366px) {
    width: ${props => props.$variant === "little" ? "110px" : props.$variant === "medium" ? "184px" : "246px"};
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