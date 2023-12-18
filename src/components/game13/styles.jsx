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
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: 320px) {
    gap: 0.5rem;
  }

  @media (min-width: 768px) {
    width: 25rem;
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 80%;
      justify-content: center;
      flex-direction: row;
      gap: 0.5rem;
    }
  }

  @media (min-width: 1024px) {    
    gap: 3rem;
  }
`;

export const Question = styled.section`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  text-align: center;

  p {
    font-size: 1rem;
    font-weight: bold;
  }

  @media (max-width: 320px) {
    width: 18.75rem;

    p {
      font-size: 0.875rem;
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    width: 25rem;
    height: 10rem;
    display: flex;
    align-items: center;

    p {
      font-size: 1.125rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 25rem;
      height: 12rem;
      

      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 30rem;
    height: 15rem;

    p {
      font-size: 1.125rem;
    }
  }
`;

export const Answers = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      gap: 0.5rem;
    }
  }

  @media (min-width: 1024px) {
    width: 40%;
    gap: 1rem;
  }
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-right: 0.5rem;

  p {
    font-weight: bold;
    font-size: 1rem;
  }

  @media(max-width: 320px) {
    gap: 0.5rem;

    p {
      font-size: 0.75rem;
    }
  }

  @media(min-width: 768px) {
    gap: 1rem;

    p {
      font-size: 1.25rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.5rem;

      p {
        font-size: 0.75rem;
      }
    }
  }

  @media(min-width: 1024px) {
    gap: 0.5rem;
    padding-right: 1.25rem;

    p {
      font-size: 1.25rem;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media(max-width: 320px) {
    gap: 0.25rem;
  }

  @media (min-width: 768px) {
    gap: 0.5rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      gap: 0.25rem;
    }
  }

  @media (min-width: 1024px) {
    gap: 1rem;
  }
`;

export const AnswersRow = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  p {
    flex: 1;
    text-align: center;
    height: 3.5rem;
    padding-inline: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${props => props.theme.black};
    border-radius: 8px;
  }

  @media (max-width: 320px) {
    padding-inline: 0.5rem;
    gap: 0.5rem;

    p {
      height: 2.5rem;
      font-size: 0.75rem;
      border-radius: 6px;
    }
  }

  @media (min-width: 768px) {
    gap: 1rem;
    padding-inline: 0rem;

    p {
      height: 4.5rem;
      font-size: 0.875rem;
      border-width: 3px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      gap: 0.5rem;
      padding-inline: 0.75rem;

      p {
        height: 2.5rem;
        font-size: 0.75rem;
        border-radius: 6px;
      }
    }
  }

  @media (min-width: 1024px) {
    gap: 1rem;

    p {
      height: 4.5rem;
      font-size: 0.875rem;
      border-width: 3px;
    }
  }
`;

export const RadioG = styled(RadioGroup.Root)`
  display: flex;
  gap: 0.5rem;
`;

export const Radio = styled(RadioGroup.Item)`
  all: unset;
  width: 3.5rem;
  height: 3.5rem;
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
      width: 3rem;
      height: 3rem;
      border-radius: 8px;
      background-color: transparent;
    }
  }

  @media (max-width: 320px) {
    width: 2rem;
    height: 2rem;
    border-radius: 2px;
  }

  @media (min-width: 1024px) {
    width: 4rem;
    height: 4rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 2rem;
      height: 2rem;
      border-radius: 2px;
    }
  }

  @media (min-width: 1024px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const ButtonCheck = styled.button`
  all: unset;
  width: 10rem;
  height: 2.5rem;
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
    font-size: 1rem;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 320px) {
    width: 9rem;
    height: 2rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media (min-width: 768px) {
    width: 21rem;
    height: 3rem;

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 13rem;
      height: 2rem;

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 21rem;
    height: 3rem;

    p {
      font-size: 2rem;
    }
  }
`;