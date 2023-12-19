import styled from "styled-components";

export const Container = styled.div`
  all: unset;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["red-200"]};
  border-radius: 3px;
  color: ${props => props.theme.white};
  cursor: pointer;
  z-index: 1000000;

  img {
    width: 16px;
  }

  @media(max-width: 320px) {
    width: 24px;
    height: 24px;

    img {
      width: 12px;
    }
  }

  @media(min-width: 768px) {
    width: 48px;
    height: 48px;

    img {
      width: 24px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 32px;
      height: 32px;

      img {
        width: 16px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 48px;
    height: 48px;

    img {
      width: 28px;
    }
  }
`;
