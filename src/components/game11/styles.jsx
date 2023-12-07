import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media(min-width: 768px) {
    width: 40rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
      width: 40rem;
    }
  }

  @media(min-width: 1280px) {
    width: 60rem;
  }
`;

export const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(min-width: 768px) {
    gap: 1.5rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 0.5rem;
    }
  }

  @media(min-width: 1280px) {
    gap: 1.5rem;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 9rem;
  height: 3.5rem;
  display: flex;
  padding-inline: 0.5rem;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  transition: all ease 0.3s;

  p {
    font-size: 0.875rem;
    text-align: center;
    font-weight: 500;
    word-wrap: break-word;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media(max-width: 320px) {
    width: 7.5rem;
    height: 3rem;
    
    p {
      font-size: 0.75rem;
    }
  }

  @media(min-width: 768px) {
    width: 15rem;
    height: 4rem;
    border-width: 3px;

    p {
      font-size: 1.125rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 180px;
      height: 2rem;
      border-radius: 6px;
      
      p {
        font-size: 0.75rem;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 15rem;
    height: 4rem;
    border-width: 3px;
    border-radius: 8px;

    p {
      font-size: 1.125rem;
    }
  }
`;