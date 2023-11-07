import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${props => props.theme["gray-200"]};
  border: 1px solid ${props => props.theme.black};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  @media(max-width: 320px) {
    width: 1rem;
    height: 1rem;
  }

  @media(min-width: 600px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media(min-width: 1024px) {
    width: 150px;
    height: 32px;
  }

  @media(min-width: 1440px) {
    width: 160px;
    height: 36px;
  }

  @media(min-width: 1920px) {
    width: 220px;
  }

  @media(min-width: 2560px) {
    width: 270px;
  }
`;