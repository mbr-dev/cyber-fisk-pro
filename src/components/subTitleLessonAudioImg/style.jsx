import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  background-color: ${props => props.theme["gray-100"]};
  padding-block: 0.625rem;
  
  .img2 {
    width: 180px;
    border-radius: 8px;
  }

  @media(max-width: 360px) {
    .img2 {
      width: 150px;
    }
  }

  @media(max-width: 320px) {
    .img2 {
      width: 96px;
    }
  }

  @media(min-width: 600px) {
    .img2 {
      width: 250px;
    }
  }

  @media(min-width: 1024px) {
    .img2 {
      width: 200px;
    }
  }

  @media(min-width: 1024px) {
    .img2 {
      width: 280px;
    }
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

  &:hover {
    transform: scale(1.1);
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

  @media(min-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;