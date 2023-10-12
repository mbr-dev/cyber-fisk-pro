import styled from "styled-components";

export const ButtonRec = styled.button`
  all: unset;
  width: 13rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;

  img {
    height: 24px;
  }

  .ruido {
    width: 70%;
  }

  &:hover {
    scale: 1.05;
  }

  @media(max-width: 320px) {
    width: 13rem;
    height: 3rem;

    img {
      width: 18px;
    }
  }
`;