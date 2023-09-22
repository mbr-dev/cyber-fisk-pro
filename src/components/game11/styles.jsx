import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  width: 100vw;
  height: 21.875rem;
  margin-top: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-inline: 1rem;
`;

export const Questions = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const Answers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button`
  all: unset;
  width: 9.125rem;
  height: 3.5rem;
  display: flex;
  padding-inline: 0.5rem;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  transition: all ease 0.3s;

  p {
    font-size: 0.875rem;
    text-align: center;
    font-weight: bold;
    word-wrap: break-word;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;