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
    width: 700px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      flex-direction: row;
      width: 600px;
    }
  }

  @media(min-width: 1024px) {
    width: 900px;
  }
`;

export const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  @media(max-width: 320px) {
    gap: 6px;
  }

  @media(min-width: 768px) {
    gap: 24px;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      gap: 6px;
    }
  }

  @media(min-width: 1024px) {
    gap: 24px;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 150px;
  height: 52px;
  display: flex;
  padding-inline: 0.5rem;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px 0px #00000033;
  border-radius: 8px;
  transition: all ease 0.3s;

  p {
    font-size: 14px;
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

  @media(max-width: 360px) {
    width: 132px;
    
    p {
      font-size: 14px;
    }
  }

  @media(max-width: 320px) {
    width: 120px;
    height: 46px;
    
    p {
      font-size: 12px;
    }
  }

  @media(min-width: 768px) {
    width: 280px;
    height: 72px;
    border-width: 3px;

    p {
      font-size: 16px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 220px;
      height: 30px;
      
      p {
        font-size: 10px;
      }
    }
  }

  @media(min-width: 1024px) {
    width: 280px;
    height: 58px;
    border-width: 3px;

    p {
      font-size: 16px;
    }
  }

  
  @media(min-width: 1366px) {
    width: 300px;
    height: 64px;
  }
`;