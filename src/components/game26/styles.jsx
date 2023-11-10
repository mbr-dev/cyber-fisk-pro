import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  @media(max-width: 320px) {
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  @media(min-width: 600px) {
    margin-top: 24px;
    gap: 24px;
  }

  @media(min-width: 1024px) {
    margin-top: 16px;
    gap: 12px;
  }

  @media(min-width: 1440px) {
    margin-top: 24px;
    gap: 20px;
  }
`;
