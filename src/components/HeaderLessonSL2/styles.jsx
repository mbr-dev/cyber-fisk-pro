import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  height: 4.5rem;
  align-items: center;
  border-end-end-radius: 18px;
  border-end-start-radius: 18px;
  overflow: hidden;
  position: relative;

  .bgImg {
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
  }

  @media(max-width: 320px) {
    height: 3rem;
    border-end-end-radius: 10px;
    border-end-start-radius: 10px;
  }

  @media(min-width: 600px) {
    height: 3.5rem;
  }

  @media(min-width: 1024px) {
    height: 6.25rem;
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
    padding: 0.5rem 0.875rem;
  }

  @media(min-width: 1024px) {
    padding: 1rem;
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
    font-size: 0.875rem;
    font-weight: 500;
    color: ${props => props.theme.white};
  }

  img {
    width: 32px;
  }

  @media(max-width: 320px) {
    p {
      font-size: 0.75rem;
    }

    img {
      width: 24px;
    }
  }

  @media(min-width: 600px) {
    p {
      font-size: 0.75rem;
    }

    img {
      width: 24px;
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
`;