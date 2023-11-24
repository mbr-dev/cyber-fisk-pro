import styled from "styled-components";

export const Container = styled.button`
  all: unset;
  width: 250px;
  height: 36px;
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
    font-size: 24px;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 320px) {
    width: 200px;
    height: 32px;

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 480px) and (max-width: 798px) {
    width: 300px;
    height: 36px;

    p {
      font-size: 20px;
    }
  }

  @media(min-width: 800px) {
    width: 350px;
    height: 52px;

    p {
      font-size: 24px;
    }
  }

  @media(min-width: 1280px) {
    width: 400px;
    height: 56px;

    p {
      font-size: 32px;
    }
  }
`;