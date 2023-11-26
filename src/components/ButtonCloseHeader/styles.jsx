import styled from "styled-components";

export const Container = styled.button`
  all: unset;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme['red-200']};
  border-radius: 9999px;
  color: ${props => props.theme.white};
  cursor: pointer;

  img {
    width: 14px;
  }

  @media(max-width: 320px) {
    width: 24px;
    height: 24px;
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
