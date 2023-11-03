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
  margin-top: 3rem;

  @media(max-width: 320px) {
    margin-top: 2rem;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media(max-width: 320px) {
    gap: 1.5rem;
  }

  button:disabled {
    cursor: not-allowed;
  }
`;

export const ButtonAudio = styled.button`
  all: unset;
  width: 8rem;
  height: 2.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;

  &:hover {
    scale: 1.05;
  }

  img {
    width: 40%;
  }

  .btn2 {
    width: 18%;
  }

  &:disabled {
    cursor: not-allowed;
    border: 2px solid ${props => props.theme["red-200"]};
  }

  @media(max-width: 320px) {
    width: 7rem;
  }
`;