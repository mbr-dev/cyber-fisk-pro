import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  height: 72px;
  align-items: center;
  border-end-end-radius: 18px;
  border-end-start-radius: 18px;
  overflow: hidden;
  position: relative;

  h2 {
    font-size: 28px;
    color: ${props => props.theme.white};
  }

  .bgImg {
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
  }

  @media(max-width: 320px) {
    h2 {
      font-size: 24px;
    }
  }

  @media(min-width: 600px) {
    gap: 140px;

    h2 {
      font-size: 32px;
    }
  }

  @media(min-width: 1024px) {
    gap: 220px;
    height: 100px;
  }

  @media(min-width: 1366px) {
    gap: 420px;

    h2 {
      font-size: 44px;
    }
  }

  @media(min-width: 1920px) {
    gap: 580px;
    height: 120px;
  }
`

export const BarStep = styled.div`
  display: flex;
  padding: 0.5rem 0.75rem;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.white};
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px #00000040;

  @media(max-width: 320px) {
    padding: 0.5rem;
  }

  @media(min-width: 600px) {
    padding: 0.75rem 1rem;
  }

  @media(min-width: 1024px) {
    padding: 16px;
  }
`;

export const Icons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  p {
    font-size: 0.75rem;
    font-weight: 500;
    color: ${props => props.theme.white};
  }

  img {
    width: 34px;
  }

  @media(max-width: 320px) {
    img {
      width: 28px;
    }
  }

  @media(min-width: 600px) {
    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 1024px) {
    p {
      font-size: 20px;
    }

    img {
      width: 48px;
    }
  }

  @media(min-width: 1920px) {
    p {
      font-size: 22px;
    }

    img {
      width: 52px;
    }
  }
`;