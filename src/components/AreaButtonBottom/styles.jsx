import styled from "styled-components";

export const Container = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5rem;

  @media(max-width: 320px) {
    margin-top: 0.5rem;
  }
`;

export const LineSeparator = styled.div`
  width: 20rem;
  height: 1.5px;
  margin-bottom: 1rem;
  background-color: ${props => props.theme["gray-200"]};

  @media(max-width: 376px) {
    width: 18.75rem;
  }

  @media(max-width: 320px) {
    width: 17.5rem;
    margin-bottom: 0.5rem;
  }
`;