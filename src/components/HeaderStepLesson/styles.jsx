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
    width: 48px;
    height: 24px;
  }

  @media(min-width: 1024px) {
    width: 100px;
    height: 32px;
  }

  @media(min-width: 1440px) {
    width: 110px;
    height: 36px;
  }

  @media(min-width: 1920px) {
    width: 150px;
  }

  @media(min-width: 2560px) {
    width: 200px;
  }
`;