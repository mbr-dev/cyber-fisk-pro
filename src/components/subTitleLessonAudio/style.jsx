import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme["gray-100"]};
  padding-block: 0.625rem;

  @media(min-width: 600px) {
   padding-block: 16px;
  }
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

  img {
    width: 32px;
  }

  &:hover {
    transform: scale(0.9);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media(max-width: 360px) {
    width: 46px;
    height: 46px;
    border-radius: 6px;

    img {
      width: 20px;
    }
  }

   @media(min-width: 600px) {
    width: 96px;
    height: 96px;
  }
`;