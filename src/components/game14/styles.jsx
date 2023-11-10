import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 100%;
  }

  @media(max-width: 320px) {
    height: 6.5rem;
  }

  @media(min-width: 1024px) {
    width: 500px;
    height: 100%;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media(min-width: 1024px) {
    margin-top: 32px;
    width: 800px;
    height: 270px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(min-width: 600px) {
    margin-top: 32px;
    gap: 32px;
  }

  @media(min-width: 1024px) {
    margin-top: 8px;
    gap: 20px;
  }

  @media(min-width: 1440px) {
    margin-top: 32px;
    gap: 28px;
  }
`;