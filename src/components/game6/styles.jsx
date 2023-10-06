import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  
  @media(max-width: 320px) {
    margin-top: 0.75rem;
    gap: 0.5rem;
    padding-inline: 0.5rem;
  }
`