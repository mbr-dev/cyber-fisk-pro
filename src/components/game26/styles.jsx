import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 14px;
  overflow: hidden;

  @media(max-width: 320px) {
    gap: 6px;
    margin-top: 6px;
  }

  @media(min-width: 600px) {
    margin-top: 24px;
    gap: 24px;
  }

  @media(min-width: 1024px) {
    margin-top: 16px;
    gap: 12px;
  }

  @media(min-width: 1440px) {
    margin-top: 24px;
    gap: 20px;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 250px;
  height: 36px;
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
    width: 150px;
    height: 36px;

    p {
      font-size: 18px;
    }
  }
`;

export const Button = styled.button`
  all: unset;
  width: 180px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${props => props.theme["green-300"]};
  border: 2px solid ${props => props.theme["green-200"]};
  border-bottom-width: 3px;
  cursor: pointer;
  transition: all ease 0.3s;

  p {
    color: ${props => props.theme.white};
    font-size: 24px;
  }

  &:hover {
    background-color: ${props => props.theme["green-400"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 320px) {
    width: 150px;
    height: 36px;

    p {
      font-size: 18px;
    }
  }
`;