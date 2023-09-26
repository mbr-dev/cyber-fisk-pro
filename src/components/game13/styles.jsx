import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Container = styled.div`
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
  gap: 1rem;
`;

export const Question = styled.section`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  text-align: center;

  p {
    font-weight: bold;
  }
`;

export const Answers = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-right: 0.5rem;

  p {
    font-weight: bold;
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
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
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
`;

// export const Indicator = styled(RadioGroup.Indicator)`
//   &::after {
//     content: '';
//     display: block;
//     width: 3rem;
//     height: 3rem;
//     border-radius: 8px;
//     background-color: red;
//   }
// `;

export const Button = styled.button`
  all: unset;
  width: 15.875rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme["red-300"]};
  border-bottom: 4px solid ${props => props.theme["red-300"]};
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  p {
    font-size: 1.25rem;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media(max-width: 320px) {
    width: 11rem;
    height: 2rem;

    p {
      font-size: 1rem;
    }
  }
`;
