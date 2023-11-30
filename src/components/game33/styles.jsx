import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  overflow: hidden;

  @media(max-width: 320px) {
    
  }

  @media(min-width: 600px) {
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  @media(min-width: 1280px) {
    margin-top: 1rem;
    gap: 1rem;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 16rem;
  height: 2.5rem;
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
    font-size: 0.875rem;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 320px) {
    width: 9.5rem;
    height: 2.5rem;

    p {
      font-size: 0.75rem;
    }
  }

  @media (min-width: 600px) {
    width: 9.5rem;
    height: 2.5rem;

    p {
      font-size: 0.75rem;
    }
  }

  @media (min-width: 1280px) {
    width: 18rem;
    height: 3.25rem;

    p {
      font-size: 0.875rem;
    }
  }
`;

export const ButtonCheck = styled.button`
  all: unset;
  width: 10rem;
  height: 2.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["green-600"]};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme["green-700"]};
  border-bottom-width: 3px;
  border-left-width: 3px;
  cursor: pointer;

  p {
    font-size: 1rem;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 320px) {
    width: 9rem;
    height: 2rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media (min-width: 600px) {
    width: 13rem;
    height: 2rem;
  }

  @media (min-width: 1280px) {
    width: 21rem;
    height: 3rem;

    p {
      font-size: 2rem;
    }
  }
`;