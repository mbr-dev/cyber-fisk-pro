import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 16px;

  @media(max-width: 320px) {
    margin-top: 8px;
    gap: 8px;
  }

  @media(min-width: 768px) {
    margin-top: 2rem;
    gap: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      margin-top: 0.5rem;
      gap: 0.5rem;
      flex-direction: row;
    }
  }

  @media(min-width: 1024px) {
    margin-top: 24px;
    gap: 24px;
  }

  @media(min-width: 1366px) {
    width: 1050px;
    gap: 32px;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 132px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all ease 0.3s;
  text-align: center;

  p {
    font-size: 14px;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
  }  

  @media(max-width: 320px) {
    width: 120px;
    height: 36px;

    p {
      font-size: 12px;
    }
  }

  @media(min-width: 768px) {
    width: 18.75rem;
    height: 5rem;

    p {
      font-size: 1.25rem;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 12rem;
      height: 3rem;

      p {
        font-size: 0.875rem;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 264px;
    height: 64px;

    p {
      font-size: 20px;
    }
  }

  @media(min-width: 1366px) {
    width: 300px;
    height: 72px;
  }
`;