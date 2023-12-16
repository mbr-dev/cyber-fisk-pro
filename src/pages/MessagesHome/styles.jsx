import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: ${props => props.theme["gray-100"]};
  overflow-y: scroll;

  @media (max-width: 320px) {
    padding-top: 10px;
    gap: 10px;
  }

  @media (min-width: 768px) {
    padding-top: 24px;
    gap: 24px;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      padding-top: 8px;
      padding-inline: 48px;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      gap: 8px;
    }
  }

  @media (min-width: 1024px) {
    padding-inline: 64px;
    padding-top: 24px;
    gap: 24px;
  }

  @media (min-width: 1366px) {
    padding-inline: 100px;
  }

  @media (min-width: 1920px) {
    padding-inline: 300px;
  }
`;

export const Div = styled.button`
  all: unset;
  width: 300px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding-right: 6px;
  box-shadow: 0px 4px 10px 0px #00000033;

  .spanDay {
    height: 48px;
    padding-inline: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;
    border: 2px solid transparent;
    border-top-left-radius: 8px;
    border-end-start-radius: 8px;
  }

  @media (max-width: 320px) {
    width: 250px;
    height: 40px;

    .spanDay {
      height: 40px;
      padding-inline: 6px;
      font-size: 0.625rem;
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    width: 500px;
    height: 64px;
    padding-right: 0.75rem;

    .spanDay {
      height: 64px;
      padding-inline: 0.75rem;
      font-size: 1rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 320px;
      height: 48px;
      padding-right: 0.5rem;

      .spanDay {
        height: 48px;
        padding-inline: 0.5rem;
        font-size: 0.75rem;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 420px;
    height: 64px;
    padding-right: 0.75rem;

    .spanDay {
      height: 64px;
      padding-inline: 0.75rem;
      font-size: 18px;
    }
  }

  @media (min-width: 1366px) {
    width: 600px;
    height: 72px;

    .spanDay {
      height: 72px;
      padding-inline: 14px;
      font-size: 20px;
    }
  }
`;

export const Text = styled.div`
  flex: 1;
  padding-left: 0.5rem;

  p {
    font-size: 12px;
  }
  
  span {
    font-size: 10px;
  }

  @media (max-width: 320px) {
    padding-left: 8px;

    p {
      font-size: 10px;
    }
    
    span {
      font-size: 8px;
    }
  }

  @media (min-width: 768px) {
    padding-left: 16px;

    p {
      font-size: 18px;
    }
    
    span {
      font-size: 16px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      padding-left: 8px;

      p {
        font-size: 12px;
      }
      
      span {
        font-size: 10px;
      }
    }
  }

  @media (min-width: 1024px) {
    padding-left: 16px;

    p {
      font-size: 18px;
    }

    span {
      font-size: 14px;
    }
  }

  @media (min-width: 1366px) {
    padding-left: 20px;

    p {
      font-size: 20px;
    }

    span {
      font-size: 16px;
    }
  }
`;

export const DivImg = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 8px;

  img {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 320px) {
    width: 30px;
    height: 30px;

    img {
      width: 16px;
      height: 16px;
    }
  }

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
    border-width: 3px;

    img {
      width: 24px;
      height: 24px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 2rem;
      height: 2rem;
      border-width: 1px;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 3rem;
    height: 3rem;
    border-width: 3px;

    img {
      width: 24px;
      height: 24px;
    }
  }

  @media (min-width: 1366px) {
    width: 52px;
    height: 52px;

    img {
      width: 28px;
      height: 28px;
    }
  }
`;