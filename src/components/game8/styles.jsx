import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(min-width: 768px) {
    width: 20rem;
    margin-top: 2rem;
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 100%;
      flex-direction: row;
      gap: 1rem;
      margin-top: 1rem;
    }
  }

  @media(min-width: 1280px) {
    margin-top: 2rem;
    gap: 2rem;
  }
`;

export const Title = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme["gray-100"]};
  text-align: center;
  padding-block: 0.5rem;
  
  p {
    font-size: 1.5rem;
    font-weight: 500;
  }
  
  @media(max-width: 320px) {
    padding-block: 0.375rem;
    padding-inline: 0.5rem;

    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 768px) {
    padding-block: 1rem;
    padding-inline: 0;

    p {
      font-size: 2rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding-block: 0.5rem;

      p {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 1280px) {
    padding-block: 1rem;

    p {
      font-size: 2rem;
    }
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 12rem;
  height: 4rem;
  padding-inline: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  border: 2px solid transparent;
  border-bottom-width: 3px;
  text-align: center;
  cursor: pointer;
  transition: all ease 0.3s;

  p {
    color: ${props => props.theme["gray-700"]};
    font-size: 1rem;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 320px) {
    width: 9rem;
    height: 2.5rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media (min-width: 768px) {
    width: 15rem;
    height: 4rem;

    p {
      font-size: 1.5rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 9rem;
      height: 3rem;

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media (min-width: 1280px) {
    width: 15rem;
    height: 4rem;

    p {
      font-size: 1.5rem;
    }
  }
`;