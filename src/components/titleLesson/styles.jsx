import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px;
  text-align: center;

  span {
    font-size: 20px;
    font-weight: 500;
  }

  @media(max-width: 320px) {
    padding: 10px;

    span {
      font-size: 16px;
    }
  }

  @media(min-width: 768px) {
    padding: 16px;

    span {
      font-size: 28px;
    }
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      padding: 6px;

      span {
        font-size: 16px;
      }
    }
  }

  @media(min-width: 1024px) {
    padding: 16px;
    
    span {
      font-size: 32px;
    }
  }
`
