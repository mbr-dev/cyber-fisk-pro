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
  margin-top: 3rem;
  gap: 1rem;

  span {
    font-size: 1.5rem;
  }

  p {
    padding-inline: 1rem;
  }

  @media(max-width: 320px) {
    gap: 3rem;
    margin-top: 2rem;
  }

  @media(min-width: 600px) {
    form { 
      gap: 12px; 
    }

    span {
      font-size: 24px;
    }

    p {
      font-size: 22px;
    }
  }

  @media(min-width: 1024px) {
    form { 
      gap: 16px; 
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["gray-100"]};

  input {
    all: unset;
    width: 18.75rem;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme["gray-700"]};
    font-weight: bold;

    @media(max-width: 360px) {
      width: 16rem;
    }
  }

  @media(min-width: 600px) {
    padding: 16px;

    input { 
      width: 550px;
      font-size: 24px;
    }
  }

  @media(min-width: 1024px) {
    input { 
      width: 750px;
    }
  }

  @media(min-width: 1440px) {
    input { 
      width: 800px;
    }
  }
`;