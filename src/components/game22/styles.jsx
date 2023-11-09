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
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  @media(max-width: 360px) {
    gap: 1rem;
    margin-top: 1rem;
  }
  
  @media(min-width: 600px) {
    margin-top: 54px;
    gap: 44px;
  }

  @media(min-width: 1024px) {
    margin-top: 24px;
    gap: 24px;
  }
`;