import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
  
export const Main = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${props => props.theme["gray-200"]};
  border: 1px solid ${props => props.theme.black};
  border-left: transparent;

  @media(max-width: 320px) {
    width: 1rem;
    height: 1rem;
  }

  @media(min-width: 600px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media(min-width: 1024px) {
    width: 200px;
    height: 32px;
  }

  @media(min-width: 1440px) {
    width: 300px;
    height: 36px;
  }

  @media(min-width: 1920px) {
    width: 500px;
  }

  @media(min-width: 2560px) {
    width: 700px;
  }
`;