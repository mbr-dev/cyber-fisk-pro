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
`;