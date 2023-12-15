import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  background-color: ${props => props.theme["gray-100"]};
  overflow-y: scroll;

  @media (max-width: 320px) {
    gap: 0.75rem;
    padding-top: 0.75rem;
  }

  @media (min-width: 768px) {
    gap: 1.5rem;
    padding-top: 2rem;
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      padding-inline: 3rem;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.5rem;
      padding-top: 0.5rem;
    }
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    gap: 20px;
    padding-inline: 4rem;
    padding-top: 32px;
  }

  @media (min-width: 1366px) {
    gap: 1.5rem;
  }
`;

export const Div = styled.button`
  all: unset;
  width: 18.75rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding-right: 6px;
  box-shadow: 0px 4px 10px 0px #00000033;

  .spanDay {
    height: 3rem;
    padding-inline: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;
    border: 2px solid ${props => props.theme["blue-300"]};
    border-top-left-radius: 8px;
    border-end-start-radius: 8px;
    background-color: ${props => props.theme["blue-50"]};
  }

  @media (max-width: 320px) {
    width: 15.625rem;
    height: 2.5rem;

    .spanDay {
      padding-inline: 6px;
      font-size: 0.625rem;
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    width: 37.5rem;
    height: 4rem;
    padding-right: 0.75rem;

    .spanDay {
      height: 4rem;
      padding-inline: 0.75rem;
      font-size: 1rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      width: 20rem;
      height: 3rem;
      padding-right: 0.5rem;

      .spanDay {
        height: 3rem;
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
      height: 4rem;
      padding-inline: 0.75rem;
      font-size: 1rem;
    }
  }

  @media (min-width: 1366px) {
    width: 34rem;
  }

  @media (min-width: 1440px) {
    width: 38rem;
  }
`;

export const Text = styled.div`
  flex: 1;
  width: 100%;
  padding-left: 0.5rem;

  p {
    font-size: 0.75rem;
  }
  
  span {
    font-size: 0.625rem;
  }

  @media (max-width: 320px) {
    padding-left: 0.375rem;

    p {
      font-size: 0.625rem;
    }
    
    span {
      font-size: 0.5rem;
    }
  }

  @media (min-width: 768px) {
    padding-left: 1rem;

    p {
      font-size: 1.125rem;
    }
    
    span {
      font-size: 0.875rem;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      padding-left: 0.5rem;

      p {
        font-size: 0.75rem;
      }
      
      span {
        font-size: 0.5rem;
      }
    }
  }

  @media (min-width: 1024px) {
    padding-left: 1rem;

    p {
      font-size: 1.125rem;
    }
    
    span {
      font-size: 0.875rem;
    }
  }
`;

export const DivImg = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme["blue-300"]};
  border-radius: 8px;

  img {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 320px) {
    width: 1.75rem;
    height: 1.75rem;

    img {
      width: 16px;
      height: 16px;
    }
  }

  @media (min-width: 768px) {
    width: 3rem;
    height: 3rem;
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
`;