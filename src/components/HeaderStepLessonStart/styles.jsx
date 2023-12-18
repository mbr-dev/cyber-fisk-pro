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
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  @media(min-width: 768px) {
    width: 3.25rem;
    height: 2rem;
  }

  @media(orientation: landscape) {
    @media(min-width: 600px) {
      width: 3.5rem;
      height: 1.5rem;
    }
  }

  @media(min-width: 1024px) {
    width: 72px;
    height: 2rem;
  }

  @media(min-width: 1366px) {
    width: 6.25rem;
  }

  @media(min-width: 1920px) {
    width: 120px;
  }
`;