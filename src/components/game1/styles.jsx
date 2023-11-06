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
  margin-top: 1rem;

  @media(max-width: 320px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media(min-width: 600px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }

  @media(min-width: 1024px) {
    gap: 64px;
    margin-top: 44px;
  }
`;