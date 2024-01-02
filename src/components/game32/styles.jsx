import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

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
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 320px) {
    gap: 6px;
  }

  @media (min-width: 768px) {
    gap: 1rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      flex-direction: row;
      gap: 0;
    }
  }
`;

export const Div = styled.div`
  width: 100%;

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 35%;
    }
  }
`;

export const Answers = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 320px) {
    gap: 6px;
  }

  @media (min-width: 768px) {
    gap: 16px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 50%;
      gap: 4px;
    }
  }

  @media (min-width: 1024px) {    
    gap: 8px;
  }
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  padding-inline: 20px;

  p {
    font-weight: bold;
    font-size: 16px;
  }

  @media(max-width: 320px) {
    gap: 14px;
    padding-inline: 12px;

    p {
      font-size: 10px;
    }
  }

  @media(min-width: 768px) {
    gap: 28px;
    padding-inline: 84px;

    p {
      font-size: 24px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 20px;
      padding-inline: 42px;

      p {
        font-size: 10px;
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 28px;
    padding-inline: 32px;

    p {
      font-size: 24px;
    }
  }

  @media(min-width: 1366px) {
    padding-inline: 140px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 0.75rem;
  gap: 10px;
  
  @media(max-width: 320px) {
    padding-inline: 8px;
    gap: 4px;
  }

  @media(min-width: 768px) {
    padding-inline: 32px;
    gap: 16px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      gap: 4px;
    }
  }

  @media (min-width: 1024px) {
    gap: 8px;
  }
`;

export const AnswersRow = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  p {
    width: 228px;
    height: 56px;
    font-size: 14px;
    text-align: center;
    padding-inline: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${props => props.theme.black};
    border-radius: 8px;
  }

  @media (max-width: 320px) {
    gap: 14px;

    p {
      width: 200px;
      height: 34px;
      font-size: 12px;
      font-weight: normal;
      border-radius: 6px;
    }
  }

  @media (min-width: 768px) {
    width: 620px;
    gap: 16px;

    p {
      width: 400px;
      height: 84px;
      font-size: 16px;
      border-width: 3px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 350px;
      gap: 10px;

      p {
        width: 232px;
        height: 34px;
        font-size: 12px;
        font-weight: normal;
        border-radius: 6px;
        border-width: 2px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 450px;
    gap: 16px;

    p {
      width: 300px;
      height: 72px;
      font-size: 16px;
      border-width: 3px;
    }
  }

  @media (min-width: 1366px) {
    width: 500px;

    p {
      width: 320px;
      height: 76px;
      font-size: 20px;
    }
  }
`;

export const RadioG = styled(RadioGroup.Root)`
  display: flex;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      gap: 16px;
    }
  }

  @media (min-width: 1024px) {
    gap: 24px;
  }
`;

export const Radio = styled(RadioGroup.Item)`
  all: unset;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;

  &:hover {
    scale: 1.05;
  }

  &[data-state="checked"] {
    span {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      background-color: transparent;
    }
  }

  @media (max-width: 320px) {
    width: 34px;
    height: 34px;
    border-radius: 2px;

    &[data-state="checked"] {
      span {
        width: 30px;
        height: 30px;
        border-radius: 2px;
      }
    }
  }

  @media (min-width: 768px) {
    width: 84px;
    height: 84px;
    border-radius: 8px;

    &[data-state="checked"] {
      span {
        width: 72px;
        height: 72px;
        border-radius: 8px;
      }
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 34px;
      height: 34px;
      border-radius: 2px;

      &[data-state="checked"] {
        span {
          width: 30px;
          height: 30px;
          border-radius: 2px;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    width: 72px;
    height: 72px;
    border-radius: 8px;

    &[data-state="checked"] {
      span {
        width: 60px;
        height: 60px;
        border-radius: 8px;
      }
    }
  }

  @media (min-width: 1366px) {
    width: 76px;
    height: 76px;

    &[data-state="checked"] {
      span {
        width: 62px;
        height: 62px;
      }
    }
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
      height: 28px;

      p {
        font-size: 16px;
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