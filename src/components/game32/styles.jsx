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
  margin-top: 0.5rem;
  gap: 1rem;
`;

export const Answers = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    height: 4rem;
    padding-inline: 0.5rem;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid ${props => props.theme.black};
    border-radius: 8px;
  }

  @media(max-width: 320px) {
    gap: 0.5rem;
    padding-inline: 0.5rem;

    p {
      padding-inline: 0.25rem;
      height: 3rem;
      font-size: 0.75rem;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media(max-width: 376px) {
    gap: 0.5rem;
  }

  @media(max-width: 320px) {
    gap: 0.375rem;
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

  @media(max-width: 320px) {
    width: 3rem;
    height: 3rem;
  }
`;