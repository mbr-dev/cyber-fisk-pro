import styled from "styled-components";

export const Container = styled.div`
  all: unset;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["red-200"]};
  border-radius: 3px;
  color: ${props => props.theme.white};
  cursor: pointer;

  img {
    width: 16px;
  }

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: 480px) {
    width: 36px;
    height: 36px;

    img {
      width: 20px;
    }
  }

  @media(min-width: 1280px) {
    width: 48px;
    height: 48px;

    img {
      width: 24px;
    }
  }
`;
