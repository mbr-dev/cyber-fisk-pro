import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.white};

  @media(min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  align-items: center;
  justify-content: space-around;
  padding-inline: 3rem;
  gap: 1.5rem;

  @media(min-width: 768px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(3, auto);
    gap: 3rem;
  }

  @media(max-width: 376px) {
    gap: 1rem;
  }

  @media(max-width: 360px) {
    gap: 0.75rem;
  }

  @media(max-width: 320px) {
    gap: 0.5rem;
    padding-block: 0.75rem;
  }
`;

export const Card = styled.a`
  width: 7.5rem;
  height: 7.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${props => props.theme.white};
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  cursor: pointer;
  transition: all ease 0.3s;

  img {
    height: 50%;
  }

  p {
    font-weight: 500;
    text-align: center;
    color: ${props => props.theme.black};
  }

  &:hover {
    scale: 1.05;
  }

  @media(max-width: 360px) {
    width: 7rem;
    height: 6.75rem;
  }

  @media(max-width: 320px) {
    width: 5.5rem;
    height: 5.25rem;

    p {
      font-size: 0.75rem
    }

    img {
      height: 40%;
    }
  }
`;