import styled from "styled-components";

export const Container = styled.button`
  all: unset;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme['red-200']};
  border-radius: 9999px;
  box-shadow: 0px 4px 10px 0px #00000040;
  color: ${props => props.theme.white};
  cursor: pointer;

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
