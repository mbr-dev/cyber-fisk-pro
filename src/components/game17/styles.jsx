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
`;