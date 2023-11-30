import styled from "styled-components";

export const Container = styled.button`
  all: unset;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["red-200"]};
  border-radius: 99px;
  color: ${props => props.theme.white};
  cursor: pointer;

  img {
    width: 16px;
  }

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media(min-width: 768px) {
    width: 3rem;
    height: 3rem;

    img {
      width: 24px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 782px) {
      width: 2.25rem;
      height: 2.25rem;

      img {
        width: 20px;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 3rem;
    height: 3rem;

    img {
      width: 24px;
    }
  }
`;
