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
  gap: 12px;

  @media (min-width: 600px) {
    margin-top: 32px;
    gap: 36px;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
    width: 80%;
    justify-content: center;
    flex-direction: row;
    gap: 56px;
  }

  @media (min-width: 1440px) {
    margin-top: 54px;
  }
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

  @media (min-width: 1024px) {
    width: 350px;
    height: 200px;
    display: flex;
    align-items: center;
    margin-bottom: 120px;

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
  gap: 0.5rem;

  @media (min-width: 600px) {
    gap: 12px;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }

  @media (min-width: 1920px) {
    width: 500px;
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
    border: 3px solid ${props => props.theme.black};
    border-radius: 8px;
  }

  @media (min-width: 1440px) {
    p {
      height: 64px;
      font-size: 16px;
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

  @media (min-width: 600px) {
    gap: 16px;
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

  @media (min-width: 1024px) {
    width: 64px;
    height: 64px;
  }
`;