import styled from "styled-components";

export const Game7Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Game7Main = styled.main`
  width: 18.75rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 1.5rem;
  }
`;

export const AudioArea = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const AnswerRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  button {
    .block {
      background-color: red;
    }
  }
`;

const Button = styled.button`
  all: unset;
  height: 2.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;

  &:hover {
    scale: 1.05;
  }
`;

export const ButtonAudio = styled(Button)`
  width: 8rem;

  .block {
    background-color: red;
  }

  img {
    width: 40%;
  }
`;

export const ButtonAnswer = styled(Button)`
  width: 9.5rem;
  text-align: center;

  p {
    word-wrap: break-word;
    font-weight: bold;
    font-size: 1rem;
  }
`;