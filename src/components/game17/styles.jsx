import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 0.5rem;

  @media(max-width: 360px) {
    margin-top: 0;
    gap: 1rem;
  }

  @media(max-width: 320px) {
    gap: 0.5rem;
  }

  @media(min-width: 1280px) {
    margin-top: 0;
    gap: 16px;
  }
`;

export const Image = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
  }

  @media(max-width: 320px) {
    margin-bottom: 0.5rem;

    img {
      width: 40%;
    }
  }

  @media(min-width: 600px) {
    img {
      width: 380px;
    }
  }

  @media(min-width: 1024px) {
    margin-bottom: 0;
    img {
      width: 200px;
    }
  }

  @media(min-width: 1440px) {
    img {
      width: 300px;
    }
  }
`;