import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme["gray-100"]};
  padding-block: 0.625rem;
`

export const Button = styled.button`
  all: unset;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
  border-radius: 10px;
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(0.9);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media(max-width: 320px) {
    width: 3rem;
    height: 3rem;

    svg {
      width: 28px;
    }
  }

  @media(min-width: 360px) {
    width: 4.5rem;
    height: 4.5rem;
  }
`;