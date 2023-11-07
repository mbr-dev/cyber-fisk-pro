import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${props => props.theme["gray-700"]};
  }
`;

export const Grid = styled.div`
  display: grid;
`;

export const Card = styled.button`
  all: unset;
  width: 5.125rem;
  height: 5.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px #00000033;

  p {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }

  img {
    width: 80%;
  }

  @media(max-width: 376px) {
    width: 4.75rem;
    height: 4.75rem;

    p {
      font-size: 0.875rem;
      font-weight: bold;
      text-align: center;
    }
  }

  @media(max-width: 360px) {
    width: 4.5rem;
    height: 4.5rem;
  }

  @media(max-width: 320px) {
    width: 4rem;
    height: 4rem;

    p {
      font-size: 0.75rem;
    }
  }

  @media(min-width: 1024px) {
    width: 96px;
    height: 96px;

    p {
      font-size: 20px;
    }
  }

  @media(min-width: 1440px) {
    width: 102px;
    height: 102px;
  }

  @media(min-width: 1920px) {
    width: 120px;
    height: 120px;

    p {
      font-size: 24px;
    }
  }
`;

export const Icon = styled.img`
  width: 60%;
`;
