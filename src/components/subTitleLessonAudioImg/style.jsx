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
    width: 144px;
    border-radius: 8px;
  }

  @media(max-width: 320px) {
    .img2 {
      width: 96px;
    }
  }

  @media(min-width: 600px) {
    .img2 {
      width: 132px;
      height: 64px;
      object-fit: fill;
      border-radius: 6px;
    }
  }

  @media(min-width: 1280px) {
    .img2 {
      width: 254px;
      height: 126px;
      object-fit: fill;
      border-radius: 6px;
    }
  }
`

export const Button = styled.button`
  all: unset;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
  border-radius: 10px;
  transition: all ease 0.3s;

  img {
    width: 24px;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media(max-width: 320px) {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 6px;

    img {
      width: 20px;
    }
  }

  @media(min-width: 600px) {
    width: 3rem;
    height: 3rem;
  }

  @media(min-width: 1280px) {
    width: 4.5rem;
    height: 4.5rem;

    img {
      width: 32px;
    }
  }
`;