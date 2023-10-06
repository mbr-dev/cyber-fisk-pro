import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
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