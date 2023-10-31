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
  box-shadow: 0px 4px 10px 0px #00000040;
  color: ${props => props.theme.white};
  cursor: pointer;

  img {
    width: 14px;
  }

  @media(max-width: 320px) {
    width: 24px;
    height: 24px;
  }

  @media(min-width: 768px) {
    width: 54px;
    height: 54px;

    img {
      width: 24px;
    }
  }
`;
