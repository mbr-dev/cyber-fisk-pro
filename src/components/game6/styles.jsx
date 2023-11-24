import styled from 'styled-components';

export const Container = styled.div`
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
  gap: 1rem;
  margin-top: 2rem;

  @media(max-width: 360px) {
    margin-top: 24px;
    gap: 24px;
  }
  
  @media(max-width: 320px) {
    margin-top: 16px;
    gap: 16px;
  }

  @media(min-width: 600px) {
    margin-top: 20px;
    gap: 28px;
    padding-inline: 16px;
  }

  @media(min-width: 1440px) {
    width: 1000px;
  }
`;

export const ButtonAnswer = styled.button`
  all: unset;
  width: 160px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;

  p {
    line-height: 1.1;
    font-size: 16px;
  }

  &:hover {
    scale: 1.05;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media(max-width: 360px) {
    width: 150px;
    height: 52px;

    p {
      font-size: 16px;
    }
  }

  @media(max-width: 320px) {
    width: 130px;
    height: 42px;

    p {
      font-size: 12px;
    }
  }

  @media(min-width: 768px) {
    width: 196px;
    height: 64px;

    p {
      font-size: 24px;
    }
  }

  @media(min-width: 1024px) {
    width: 300px;
    height: 72px;
  }
`;