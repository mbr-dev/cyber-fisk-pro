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
    font-size: 1.375rem;
    font-weight: 500;
  }

  @media(max-width: 360px) {
    span {
      font-size: 1.25rem;
    }
  }

  @media(max-width: 320px) {
    padding-inline: 0.375rem;

    span {
      font-size: 1.125rem;
    }
  }

  @media(min-width: 480px) {
    padding: 4px;

    span {
      font-size: 18px;
    }
  }

  @media(min-width: 1280px) {
    padding: 16px;
    
    span {
      font-size: 36px;
    }
  }
`
