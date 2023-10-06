import styled from "styled-components";

export const Container = styled.div`
  all: unset;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme["gray-700"]};
  border-radius: 6px;
  position: absolute;
  bottom: 6rem;
  right: 0.5rem;
  cursor: pointer;
  transition: all ease 0.3s;

  img { 
    width: 70%;
  }

  &:hover {
    scale: 1.1;
  }

  @media(max-width: 320px) {
    bottom: 3rem;
    right: 0.5rem;
  }
`;