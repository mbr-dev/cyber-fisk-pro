import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Main = styled.div`
  width: 150px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding-inline: 0.5rem;
  gap: 1.5rem;
  margin-top: 2rem;

  @media(max-width: 320px) {
    margin-top: 0.5rem;
    gap: 0.5rem;
  }

  @media(min-width: 600px) {
    margin-top: 32px;
    gap: 24px;
  }

  @media(min-width: 1024px) {
    margin-top: 120px;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 150px;
  height: 44px;
  padding-inline: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  border: 2px solid transparent;
  border-bottom-width: 3px;
  text-align: center;
  cursor: pointer;
  transition: all ease 0.3s;

  p {
    color: ${props => props.theme["gray-700"]};
    font-size: 14px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 320px) {
    width: 120px;
    height: 36px;

    p {
      font-size: 12px;
    }
  }
`;