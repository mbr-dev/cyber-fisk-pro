import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px;
  border-end-end-radius: 18px;
  border-end-start-radius: 18px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
  
  p {
    font-size: 24px;
    font-weight: 500;
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    height: 54px;

    p {
      font-size: 18px;
    }
  }

  @media(min-width: 768px) {
    height: 100px;
    padding-inline: 32px;

    p {
      font-size: 40px;
    }
  }

  @media(orientation: landscape) {
    @media (min-width: 600px) {
      height: 54px;

      p {
        font-size: 24px;
      }
    }
  }

  @media(min-width: 1024px) {
    height: 84px;
    padding-inline: 32px;

    p {
      font-size: 32px;
    }
  }

  @media(min-width: 1366px) {
    height: 100px;
    padding-inline: 2rem;

    p {
      font-size: 2.625rem;
    }
  }
`;