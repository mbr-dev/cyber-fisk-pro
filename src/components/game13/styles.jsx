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
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  @media (max-width: 320px) {
    width: 290px;
    gap: 4px;
  }

  @media (min-width: 768px) {
    width: 600px;
    gap: 16px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 700px;
      flex-direction: row;
      justify-content: center;
      gap: 16px;
    }
  }

  @media (min-width: 1024px) {
    width: 900px; 
    gap: 32px;
  }

  @media (min-width: 1366px) {
    width: 1200px; 
  }
`;

export const Question = styled.section`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  text-align: center;

  p {
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 320px) {
    padding: 6px;

    p {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    padding: 16px;

    p {
      font-size: 20px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 50%;
      padding: 14px;

      p {
        font-size: 14px;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 16px;

    p {
      font-size: 20px;
    }
  }
`;

export const Answers = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  @media (max-width: 320px) {
    gap: 4px;
  }

  @media (min-width: 768px) {
    width: 500px;
    gap: 16px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 320px;
      gap: 4px;
    }
  }
  
  @media (min-width: 1024px) {
    width: 500px;
    gap: 6px;
  }
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding-right: 10px;
  
  p {
    font-weight: bold;
    font-size: 14px;
  }
  
  @media(max-width: 320px) {
    gap: 12px;
    padding-right: 6px;

    p {
      font-size: 10px;
    }
  }

  @media(min-width: 768px) {
    gap: 28px;
    padding-right: 16px;

    p {
      font-size: 18px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 20px;
      padding-right: 6px;

      p {
        font-size: 10px;
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 16px;
    padding-right: 8px;

    p {
      font-size: 18px;
    }
  }

  @media(min-width: 1366px) {
    gap: 24px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media(max-width: 320px) {
    gap: 4px;
  }

  @media (min-width: 768px) {
    gap: 14px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      gap: 4px;
    }
  }

  @media (min-width: 1024px) {
    gap: 14px;
  }
`;

export const AnswersRow = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    width: 200px;
    height: 54px;
    text-align: center;
    padding-inline: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${props => props.theme.black};
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 320px) {
    p {
      width: 180px;
      height: 38px;
      padding-inline: 4px;
      font-size: 12px;
      border-radius: 6px;
    }
  }

  @media (min-width: 768px) {
    p {
      width: 300px;
      height: 76px;
      padding-inline: 4px;
      font-size: 18px;
      border-radius: 6px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      p {
        width: 220px;
        height: 38px;
        padding-inline: 4px;
        font-size: 12px;
        border-radius: 6px;
      }
    }
  }

  @media (min-width: 1024px) {
    p {
      width: 300px;
      height: 54px;
      padding-inline: 4px;
      font-size: 16px;
      border-radius: 6px;
    }
  }

  @media (min-width: 1366px) {
    p {
      height: 60px;
    }
  }
`;

export const RadioG = styled(RadioGroup.Root)`
  display: flex;
  gap: 12px;

  @media (max-width: 320px) {
    gap: 8px;
  }

  @media (min-width: 1024px) {
    gap: 24px;
  }
`;

export const Radio = styled(RadioGroup.Item)`
  all: unset;
  width: 54px;
  height: 54px;
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
    width: 38px;
    height: 38px;
    border-radius: 6px;
    
    &[data-state="checked"] {
      span {
        width: 32px;
        height: 32px;
        border-radius: 6px;
      }
    }
  }

  @media (min-width: 768px) {
    width: 76px;
    height: 76px;
    
    &[data-state="checked"] {
      span {
        width: 66px;
        height: 66px;
      }
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 38px;
      height: 38px;
      border-radius: 6px;
      
      &[data-state="checked"] {
        span {
          width: 32px;
          height: 32px;
          border-radius: 6px;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    width: 54px;
    height: 54px;
    
    &[data-state="checked"] {
      span {
        width: 46px;
        height: 46px;
      }
    }
  }

  @media (min-width: 1366px) {
    width: 60px;
    height: 60px;
    
    &[data-state="checked"] {
      span {
        width: 52px;
        height: 52px;
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