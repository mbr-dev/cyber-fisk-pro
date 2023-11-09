import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media(min-width: 600px) {
    margin-top: 32px;
    gap: 32px;
  }
`;

export const Words = styled.div`
  width: 19rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  p {
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${props => props.theme["red-200"]};
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    width: 15rem;
  }

  @media(min-width: 600px) {
    gap: 12px;

    p {
      padding: 14px;
      font-size: 18px;
    }
  }

  @media(min-width: 1024px) {
    gap: 14px;

    p {
      padding: 16px;
      font-size: 20px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 1rem;
  background-color: ${props => props.theme["gray-100"]};
`;

export const Input = styled.input`
  all: unset;
  width: 18.75rem;
  padding:0.5rem 1rem;
  border-radius: 6px;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme["gray-700"]};
  font-weight: bold;
  line-height: 1.3;

  &:focus {
    border-color: ${props => props.theme["gray-500"]};
  }

  @media(max-width: 375px) {
    width: 17rem;
  }

  @media(max-width: 320px) {
    width: 14rem;
    font-size: 0.875rem;
  }

  @media(min-width: 600px) {
    padding: 16px;
    width: 550px;
    font-size: 28px;
  }

  @media(min-width: 1024px) {
    width: 750px;
  }
`;