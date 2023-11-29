import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.div`
  width: 60px;
  height: 1.25rem;
  background-color: ${props => props.theme["gray-200"]};
  border: 1px solid ${props => props.theme.black};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  @media(max-width: 320px) {
    width: 4rem;
    height: 1rem;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  @media(min-width: 600px) {
    width: 15rem;
    height: 1.5rem;
  }


  @media(min-width: 1280px) {
    width: 400px;
    height: 2rem;
  }
`;