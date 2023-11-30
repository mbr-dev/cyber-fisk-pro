import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  text-align: center;

  span {
    font-size: 1rem;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    padding: 0.375rem;

    span {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 600px) {
    padding: 0.5rem;
  }

  @media(min-width: 1280px) {
    padding: 1rem;
    
    span {
      font-size: 2rem;
    }
  }
`
