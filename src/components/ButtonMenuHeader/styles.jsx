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
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;

  @media(max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
