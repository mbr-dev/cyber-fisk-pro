import styled from "styled-components";

export const Container = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  padding-inline: 0.5rem;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    scale: 1.05;
  }
`;