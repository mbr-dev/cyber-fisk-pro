import styled from "styled-components";

export const Container = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  padding-inline: 1rem;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;

  img {
    width: 100%;
    height: 80%;
    object-fit: contain;
  }

  p {
    line-height: 1.1;
  }

  .pBold {
    font-size: 1.5rem;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;