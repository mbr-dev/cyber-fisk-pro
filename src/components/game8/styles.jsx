import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding-inline: 0.5rem;
  gap: 1.5rem;
  margin-top: 2rem;

  @media(max-width: 320px) {
    margin-top: 0.5rem;
    gap: 0.5rem;
  }

  @media(min-width: 600px) {
    margin-top: 32px;
    gap: 24px;
  }

  @media(min-width: 1024px) {
    margin-top: 120px;
  }
`;